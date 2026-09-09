import { createWriteStream } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const BASE_URL = 'https://api.figma.com/v1'
const TIMEOUT_MS = 90_000
const MAX_ATTEMPTS = 4

const sleep = (ms) => new Promise((done) => setTimeout(done, ms))

/** 429 and 5xx are worth retrying; 403/404 mean wrong permission or wrong id, so fail fast. */
const isTransient = (status) => status === 429 || status >= 500

async function requestJson(path, token) {
  let lastError

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    if (attempt > 1) {
      // Exponential backoff with jitter so retries do not line up with other clients.
      await sleep(Math.min(2 ** attempt * 250, 8000) + Math.random() * 250)
    }

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

    try {
      const res = await fetch(`${BASE_URL}${path}`, {
        headers: { 'X-Figma-Token': token },
        signal: controller.signal,
      })

      if (isTransient(res.status)) {
        lastError = new Error(`Figma API ${res.status} ${res.statusText}`)
        continue
      }

      if (!res.ok) {
        // Surface Figma's own message. The token is only ever sent, never echoed back.
        const body = await res.text().catch(() => '')
        throw new Error(`Figma API ${res.status}: ${body.slice(0, 300) || res.statusText}`)
      }

      return await res.json()
    } catch (error) {
      if (error.name !== 'AbortError') throw error
      lastError = new Error(`Figma API timed out after ${TIMEOUT_MS}ms: ${path}`)
    } finally {
      clearTimeout(timer)
    }
  }

  throw lastError
}

export function figmaClient(token) {
  return {
    /** depth=2 returns pages plus their top-level frames without the whole node tree. */
    file: (key, { depth } = {}) =>
      requestJson(`/files/${key}${depth ? `?depth=${depth}` : ''}`, token),

    /** Full subtree for the given node ids — the highest-fidelity source available. */
    nodes: (key, ids) =>
      requestJson(`/files/${key}/nodes?ids=${encodeURIComponent(ids.join(','))}`, token),

    /** Maps every imageRef used as a fill in the file to a temporary download URL. */
    imageFills: (key) => requestJson(`/files/${key}/images`, token),

    /** Server-side render of the given nodes, used as the visual diff reference. */
    renders: (key, ids, { format = 'png', scale = 2 } = {}) =>
      requestJson(
        `/images/${key}?ids=${encodeURIComponent(ids.join(','))}&format=${format}&scale=${scale}`,
        token,
      ),
  }
}

/** Fetches a pre-signed asset URL to disk. These URLs carry no Figma credentials. */
export async function download(url, destPath) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(url, { signal: controller.signal })
    if (!res.ok) throw new Error(`Download failed ${res.status}: ${url.slice(0, 80)}`)

    await mkdir(dirname(destPath), { recursive: true })
    await pipeline(Readable.fromWeb(res.body), createWriteStream(destPath))
  } finally {
    clearTimeout(timer)
  }
}
