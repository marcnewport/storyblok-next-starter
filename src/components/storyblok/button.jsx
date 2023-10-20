import { storyblokEditable } from '@storyblok/react'
import { Button as UiButton } from '@/components/ui/button'

export function Button({ blok }) {
  console.log(blok)
  return (
    <UiButton {...storyblokEditable(blok)} variant={blok.variant} asChild>
      <a href={blok.link.url}>
        {blok.icon && !blok.icon_right && (
          <span
            className="mr-2 [&_svg]:h-4 [&_svg]:w-4"
            dangerouslySetInnerHTML={{
              __html: blok.icon,
            }}
          />
        )}
        {blok.label}
        {blok.icon && blok.icon_right && (
          <span
            className="ml-2 [&_svg]:h-4 [&_svg]:w-4"
            dangerouslySetInnerHTML={{
              __html: blok.icon,
            }}
          />
        )}
      </a>
    </UiButton>
  )
}
