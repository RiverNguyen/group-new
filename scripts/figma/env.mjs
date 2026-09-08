import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const ENV_FILES = ['.env.local', '.env']

/**
 * Minimal .env parser. Avoids pulling a dependency in for two variables, and keeps the
 * token confined to the return value — no logging happens in here by design.
 */
function parseEnvFile(path) {
  const out = {}

  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const eq = trimmed.indexOf('=')
    if (eq === -1) continue

    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()

    const quoted =
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    if (quoted && value.length >= 2) value = value.slice(1, -1)

    out[key] = value
  }

  return out
}

/**
 * Resolves a config value from the process environment first, then .env.local, then .env.
 * Returns null when absent so callers can print an actionable message instead of throwing.
 */
export function readEnv(name, cwd = process.cwd()) {
  if (process.env[name]) return process.env[name]

  for (const file of ENV_FILES) {
    const path = resolve(cwd, file)
    if (!existsSync(path)) continue

    const value = parseEnvFile(path)[name]
    if (value) return value
  }

  return null
}
