import { cn } from '@/lib/utils'
import { storyblokEditable } from '@storyblok/react'

let bg =
  'radial-gradient(at left bottom, rgb(153, 133, 243), rgb(247, 98, 180), rgb(242, 225, 95))'

export function Hero({ blok }) {
  if (blok.background_image.filename) {
    bg = `url("${blok.background_image.filename}")`
  }

  return (
    <section
      className="bg-cover bg-center p-6"
      {...storyblokEditable(blok)}
      style={{ backgroundImage: bg }}
    >
      <div
        className={cn(
          'dark-shadow mx-auto flex h-[80vh] max-h-[80vh] max-w-4xl flex-col justify-end md:aspect-video md:h-auto lg:pr-20'
        )}
      >
        <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
          {blok.text}
        </h2>
        {blok.background_image.source ? (
          <p className="mt-4 text-white/80">{blok.background_image.source}</p>
        ) : null}
      </div>
    </section>
  )
}
