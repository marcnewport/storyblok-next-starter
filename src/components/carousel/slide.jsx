import { cn } from '@/lib/utils'

function Slide({ id, className, children }) {
  return (
    <div
      id={id}
      role="group"
      aria-roledescription="Slide"
      className={cn('carousel-slide', className)}
    >
      {children}
    </div>
  )
}

Slide.displayName = 'Slide'

export { Slide }
