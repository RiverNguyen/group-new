import Image from 'next/image'

import { cn } from '@/lib/utils'
import type { ArticleBodyBlock } from '@/modules/article-detail/data/article-details-data'

const FIGURE_ASPECTS = ['aspect-[1014/552]', 'aspect-[1013/412]']

const TWITTER_PATH =
  'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'

const FACEBOOK_PATH =
  'M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8h66z'

const shareLinkClassName =
  'inline-flex size-[max(1.5rem,24px)] -m-[0.1875rem] items-center justify-center transition-opacity hover:opacity-80 xsm:size-11'

type ArticleBodyProps = {
  blocks: ArticleBodyBlock[]
  title: string
  shareUrl: string
}

export function ArticleBody({ blocks, title, shareUrl }: ArticleBodyProps) {
  const leadIndex = blocks.findIndex((block) => block.kind === 'paragraph')
  const figures = blocks.filter((block) => block.kind === 'figure')

  const twitterHref = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`

  return (
    <section
      data-figma='64:3332'
      className='flex gap-[2rem] xlg:flex-col xlg:gap-[1rem]'
    >
      <div
        data-figma='64:3333'
        className='w-[14.333125rem] shrink-0 pt-[0.5rem] xlg:w-full xlg:pt-0'
      >
        <span
          aria-hidden
          data-figma='64:3334'
          className='block h-[0.25rem] w-[4rem] bg-gold'
        />
      </div>

      <div
        data-figma='64:3335'
        className='flex w-[63.333125rem] flex-col gap-[1.5rem] pt-[1.5rem] xlg:w-full xlg:pt-0'
      >
        {blocks.map((block, index) => {
          if (block.kind === 'paragraph') {
            return (
              <p
                key={`paragraph-${index}`}
                className={cn(
                  'font-inter text-[#374151]',
                  index === leadIndex
                    ? 'text-[1.125rem] leading-[1.828125rem]'
                    : 'text-[1rem] leading-[1.625rem]',
                )}
              >
                {block.text}
              </p>
            )
          }

          const figureAspect =
            FIGURE_ASPECTS[figures.indexOf(block)] ?? FIGURE_ASPECTS[FIGURE_ASPECTS.length - 1]

          return (
            <div
              key={`figure-${index}`}
              className={cn('relative w-full overflow-hidden rounded-[0.125rem]', figureAspect)}
            >
              <Image
                src={block.image}
                alt={block.imageAlt}
                fill
                sizes='(max-width: 1024px) 100vw, 64vw'
                className='object-cover'
              />
            </div>
          )
        })}

        <div
          data-figma='64:3347'
          className='flex items-center justify-end gap-[0.75rem] pt-[1rem]'
        >
          <span className='font-inter text-[0.875rem] leading-5 text-[#6B7280]'>Chia sẻ:</span>

          <a
            href={twitterHref}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Chia sẻ bài viết ${title} lên Twitter`}
            className={shareLinkClassName}
          >
            <svg
              aria-hidden
              viewBox='0 0 16 16'
              className='size-[1.125rem] fill-[#1DA1F2]'
            >
              <path d={TWITTER_PATH} />
            </svg>
          </a>

          <a
            href={facebookHref}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Chia sẻ bài viết ${title} lên Facebook`}
            className={shareLinkClassName}
          >
            <svg
              aria-hidden
              viewBox='0 0 320 512'
              className='h-[1.125rem] w-[0.703125rem] fill-[#1877F2]'
            >
              <path d={FACEBOOK_PATH} />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
