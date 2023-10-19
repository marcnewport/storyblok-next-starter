import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

export function Grid({ blok }) {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}
