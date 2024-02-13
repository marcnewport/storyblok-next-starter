import { cn } from '@/lib/utils'
import { storyblokEditable } from '@storyblok/react'
import { Children, cloneElement } from 'react'

export function Card({ variant, children, ...props }) {
  const isHorizontal = variant === 'horizontal'
  return (
    <div
      {...props}
      className={cn(
        'flex w-full gap-6',
        isHorizontal ? 'flex-row' : 'flex-col'
      )}
    >
      {Children.map(children, (child) => cloneElement(child, { variant }))}
    </div>
  )
}

Card.displayName = 'Card'

export function CardImage({ variant, children }) {
  const isHorizontal = variant === 'horizontal'
  return (
    <div className={cn(isHorizontal ? 'basis-2/5' : 'aspect-[16/9]')}>
      {children}
    </div>
  )
}

CardImage.displayName = 'CardImage'

export function CardBody({ variant, children }) {
  const isHorizontal = variant === 'horizontal'
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        isHorizontal && 'basis-3/5 justify-center'
      )}
    >
      {children}
    </div>
  )
}

CardBody.displayName = 'CardBody'
