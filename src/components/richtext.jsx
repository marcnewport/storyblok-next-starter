import { renderRichText } from '@storyblok/react'

export function Richtext({ field, className }) {
  return field.type === 'doc' ? (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: renderRichText(field),
      }}
    />
  ) : (
    <div className={className}>{field}</div>
  )
}
