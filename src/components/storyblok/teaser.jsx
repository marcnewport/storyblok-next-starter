import { storyblokEditable } from '@storyblok/react'

export function Teaser({ blok }) {
  return (
    <h2 className="mb-10 text-2xl" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  )
}
