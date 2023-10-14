import { Children, useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Navigation } from './navigation'

function Carousel({ className, children }) {
  const slides = Children.toArray(children)
  const length = slides.length

  const [slideIndex, setSlideIndex] = useState(0)
  const carouselRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    if (carouselRef.current) {
      const slide = carouselRef.current.children[slideIndex]
      slide.scrollIntoView()
    }
  }, [slideIndex])

  function decrement() {
    const next = slideIndex - 1
    setSlideIndex(Math.max(0, next))
  }

  function increment() {
    const next = slideIndex + 1
    setSlideIndex(Math.min(length - 1, next))
  }

  function handleKeyDown(e) {
    if (e.code === 'ArrowLeft' && prevRef.current) {
      prevRef.current.classList.add('bg-white/20')
      e.preventDefault()
      decrement()
    } else if (e.code === 'ArrowRight' && nextRef.current) {
      nextRef.current.classList.add('bg-white/20')
      e.preventDefault()
      increment()
    }
  }

  function handleKeyUp(e) {
    if (e.code === 'ArrowLeft' && prevRef.current) {
      prevRef.current.classList.remove('bg-white/20')
      prevRef.current.focus()
    } else if (e.code === 'ArrowRight' && nextRef.current) {
      nextRef.current.classList.remove('bg-white/20')
      nextRef.current.focus()
    }
  }

  return (
    <div
      className="relative outline-none"
      onKeyDownCapture={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={0}
    >
      <div
        role="region"
        ref={carouselRef}
        aria-roledescription="carousel"
        className={cn('carousel', className)}
      >
        {slides}
      </div>
      <Navigation
        ref={prevRef}
        onClick={decrement}
        label="Previous slide"
        disabled={slideIndex === 0}
        className="left-4"
      >
        <ChevronLeft className="mr-1 h-8 w-8" />
      </Navigation>
      <Navigation
        ref={nextRef}
        onClick={increment}
        label="Next slide"
        disabled={slideIndex === length - 1}
        className="right-4"
      >
        <ChevronRight className="ml-1 h-8 w-8" />
      </Navigation>
    </div>
  )
}

Carousel.displayName = 'Carousel'

export { Carousel }
