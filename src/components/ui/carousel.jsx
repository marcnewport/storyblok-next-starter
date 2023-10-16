import { Children, useState, useRef, useEffect, forwardRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'

export function Carousel({ className, children }) {
  const slides = Children.toArray(children)
  const length = slides.length

  const [slideIndex, setSlideIndex] = useState(0)
  const carouselRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const isFirst = slideIndex === 0
  const isLast = slideIndex === length - 1

  useEffect(() => {
    if (carouselRef.current) {
      const slide = carouselRef.current.children[slideIndex]
      slide.scrollIntoView()
    }
  }, [slideIndex])

  function decrement() {
    const sub = slideIndex - 1
    const set = Math.max(0, sub)
    setSlideIndex(set)
  }

  function increment() {
    const add = slideIndex + 1
    const set = Math.min(length - 1, add)
    setSlideIndex(set)
  }

  function handleKeyDown(e) {
    if (e.code === 'ArrowLeft' && !isFirst && prevRef.current) {
      e.preventDefault()
      prevRef.current.classList.add('bg-white/20')
    } else if (e.code === 'ArrowRight' && !isLast && nextRef.current) {
      e.preventDefault()
      nextRef.current.classList.add('bg-white/20')
    }
  }

  function handleKeyUp(e) {
    if (e.code === 'ArrowLeft' && !isFirst && prevRef.current) {
      e.preventDefault()
      decrement()
      prevRef.current.classList.remove('bg-white/20')
    } else if (e.code === 'ArrowRight' && !isLast && nextRef.current) {
      e.preventDefault()
      increment()
      nextRef.current.classList.remove('bg-white/20')
    }
  }

  return (
    <div
      className="relative outline-none"
      onKeyDownCapture={handleKeyDown}
      onKeyUpCapture={handleKeyUp}
      tabIndex={0}
    >
      <div
        role="region"
        ref={carouselRef}
        aria-roledescription="carousel"
        className={cn(
          'hide-scrollbar inline-flex snap-x snap-mandatory overflow-x-scroll scroll-smooth',
          className
        )}
      >
        {slides}
      </div>
      <Button
        size="icon-lg"
        variant="circle"
        ref={prevRef}
        onClick={decrement}
        aria-disabled={isFirst}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2"
      >
        <ChevronLeft className="mr-1 h-8 w-8" />
      </Button>
      <Button
        size="icon-lg"
        variant="circle"
        ref={nextRef}
        onClick={increment}
        aria-disabled={isLast}
        aria-label="Next slide"
        className="absolute right-4 top-1/2"
      >
        <ChevronRight className="ml-1 h-8 w-8" />
      </Button>
    </div>
  )
}

export function CarouselSlide({ id, className, children }) {
  return (
    <div
      id={id}
      role="group"
      aria-roledescription="Slide"
      className={cn(
        'box-content flex h-full w-full flex-none snap-start',
        className
      )}
    >
      {children}
    </div>
  )
}
