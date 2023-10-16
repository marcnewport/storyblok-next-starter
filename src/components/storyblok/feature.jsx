import { storyblokEditable } from '@storyblok/react/rsc'

export function Feature({ blok }) {
  return (
    // Maybe this is a section?
    <div className="column feature" {...storyblokEditable(blok)}>
      {blok.name}
    </div>
  )
}
