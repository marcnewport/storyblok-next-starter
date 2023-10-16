import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import { Carousel, CarouselSlide } from '@/components/ui/carousel'

export function Page({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <div className="p-4">
        <Carousel className="aspect-video w-full rounded-xl text-9xl text-white">
          <CarouselSlide id="a" className="flex-center bg-red-500">
            <p>Hello</p>
          </CarouselSlide>
          <CarouselSlide id="b" className="flex-center bg-blue-500">
            <p>World</p>
          </CarouselSlide>
          <CarouselSlide id="c" className="flex-center bg-green-500">
            <p>🤓</p>
          </CarouselSlide>
        </Carousel>
      </div>
    </div>
  )
}
