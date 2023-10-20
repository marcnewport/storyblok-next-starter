import { cn } from '@/lib/utils'
import { storyblokEditable } from '@storyblok/react'
import { Richtext } from '../richtext'

export function Hero({ blok }) {
  let bg = 'linear-gradient(to top right, #9890e3 0%, #b1f4cf 100%'

  if (blok.background_image.filename) {
    bg = `url("${blok.background_image.filename}")`
  }

  return (
    <section
      className="bg-cover bg-center px-6 py-10"
      style={{ backgroundImage: bg }}
      {...storyblokEditable(blok)}
    >
      <div
        className={cn(
          'text-shadow mx-auto flex h-[75vh] max-w-4xl flex-col justify-end sm:pr-10 md:pr-20'
        )}
      >
        {blok.title && (
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
            {blok.title}
          </h2>
        )}
        {blok.description && (
          <Richtext
            field={blok.description}
            className="mt-4 text-lg font-light leading-normal text-white sm:text-xl sm:leading-normal md:text-2xl md:leading-normal [&_b]:font-semibold"
          />
        )}
      </div>
    </section>
  )
}
