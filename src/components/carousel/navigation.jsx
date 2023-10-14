import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Navigation = forwardRef(function Navigation(
  { label, onClick, disabled, className, children },
  ref
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      aria-label={label}
      aria-disabled={disabled}
      className={cn('carousel-navigation', className)}
    >
      {children}
    </button>
  )
})

Navigation.displayName = 'Navigation'

export { Navigation }
