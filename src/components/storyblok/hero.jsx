import { cn } from '@/lib/utils'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Richtext } from '../richtext'

export function Hero({ blok }) {
  let bg = 'linear-gradient(to top right, #9890e3 0%, #b1f4cf 100%'

  if (blok.image?.filename) {
    bg = `url("${blok.image.filename}")`
  }

  return (
    <section className="bg-orange-200 px-6 py-10" {...storyblokEditable(blok)}>
      <div className="contain gap-2 bg-green-200 sm:flex">
        <div className="flex-1">
          {blok.title && (
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
              {blok.title}
            </h2>
          )}
          {blok.buttons && (
            <div className="flex items-center justify-center gap-4">
              {blok.buttons.map((it, id) => (
                <StoryblokComponent key={id} blok={it} />
              ))}
            </div>
          )}
        </div>
        <div className="flex-1">
          <img
            src={blok.image.filename}
            alt={blok.image.alt}
            className="block w-full rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
