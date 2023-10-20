import { storyblokEditable } from '@storyblok/react'
import { Richtext } from '../richtext'

export function Article({ title, blok }) {
  console.log(blok)
  return (
    <article className="p-6" {...storyblokEditable(blok)}>
      <div className="prose prose-slate m-auto max-w-4xl">
        {title && <h1>{title}</h1>}
        <Richtext field={blok.content} />
      </div>
    </article>
  )
}
