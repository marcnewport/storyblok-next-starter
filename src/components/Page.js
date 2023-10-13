import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'

export default function Page({ blok }) {
  return (
    <main {...storyblokEditable(blok)} className="mt-4 text-center">
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
