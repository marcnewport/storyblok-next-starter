import { cn } from '@/lib/utils'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

export function Grid({ blok }) {
  return (
    <section className="p-6">
      <div
        className={cn(
          'mx-auto grid max-w-4xl gap-6',
          `grid-cols-${blok.columns.length}`
        )}
        {...storyblokEditable(blok)}
      >
        {blok.columns.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  )
}
