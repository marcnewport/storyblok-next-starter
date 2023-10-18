import { StoryblokComponent, useStoryblokState } from '@storyblok/react'

export function Layout({ header, children }) {
  header = useStoryblokState(header)

  return (
    <div className="flex min-h-full flex-col">
      <header>
        <StoryblokComponent blok={header.content} />
      </header>
      <main className="flex-grow bg-white">{children}</main>
      <footer className="justify-self-end">
        <Footer />
      </footer>
    </div>
  )
}
export function Footer() {
  return <p>©Copyright 2050 by nobody. All rights reversed.</p>
}
