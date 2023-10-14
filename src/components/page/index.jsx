import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import { Carousel, Slide } from '@/components/carousel/'

export function Page({ blok }) {
  return (
    <main {...storyblokEditable(blok)} className="mt-4 text-center">
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <div className="p-4">
        <Carousel className="aspect-video w-full rounded-xl text-9xl text-white">
          <Slide id="a" className="flex-center bg-red-500">
            <p>Hello</p>
          </Slide>
          <Slide id="b" className="flex-center bg-blue-500">
            <p>World</p>
          </Slide>
          <Slide id="c" className="flex-center bg-green-500">
            <p>🤓</p>
          </Slide>
        </Carousel>
      </div>
    </main>
  )
}
