import { storyblokEditable } from '@storyblok/react/rsc'

export function Feature({ blok }) {
  return (
    <div className="column feature" {...storyblokEditable(blok)}>
      {blok.name}
    </div>
  )
}
