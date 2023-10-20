import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Richtext } from '../richtext'
import { Section } from '../section'

export function Card({ blok, isStory }) {
  return (
    <Section nowrap={!isStory}>
      <div
        className="flex w-full overflow-hidden rounded-xl border shadow-lg"
        {...storyblokEditable(blok)}
      >
        {blok.image.filename && (
          <div className="basis-1/3">
            <img
              src={blok.image.filename}
              alt={blok.image.alt}
              className="min-h-full min-w-full object-cover"
            />
          </div>
        )}
        <div className="flex basis-2/3 flex-col gap-4 p-6">
          {blok.title && (
            <h2 className="text-3xl font-semibold leading-tight">
              {blok.title}
            </h2>
          )}
          {blok.description && <Richtext field={blok.description} />}
          {blok.buttons && (
            <div className="flex gap-4">
              {blok.buttons.map((it, id) => (
                <StoryblokComponent key={id} blok={it} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
