import { StoryblokComponent } from '@storyblok/react'

export function Page({ blok, title }) {
  return (
    <>
      {blok.body?.map((it) => (
        <StoryblokComponent key={it._uid} blok={it} isStory />
      ))}
    </>
  )
}
