import {
  Carousel as CarouselWrap,
  CarouselSlide,
} from '@/components/ui/carousel'

export function Carousel() {
  return (
    <div className="p-4">
      <CarouselWrap className="aspect-video w-full rounded-xl text-9xl text-white">
        <CarouselSlide id="a" className="flex-center bg-red-500">
          <p>Hello</p>
        </CarouselSlide>
        <CarouselSlide id="b" className="flex-center bg-blue-500">
          <p>World</p>
        </CarouselSlide>
        <CarouselSlide id="c" className="flex-center bg-green-500">
          <p>🤓</p>
        </CarouselSlide>
      </CarouselWrap>
    </div>
  )
}
