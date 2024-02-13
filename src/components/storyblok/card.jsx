import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Richtext } from '../richtext'
import { Section } from '../section'
import { cn } from '@/lib/utils'
import { Card as CardWrap, CardImage, CardBody } from '../ui/card'
import Image from 'next/image'

const loader = ({ src, width }) => `${src}/m/${width}x0/filters:quality(70)`

export function Card({ blok, isStory }) {
  console.log(blok.image)
  const [width, height] = blok.image.filename.split('/')[5].split('x')
  const aspectRatio = width / height
  return (
    <Section nowrap={!isStory}>
      <CardWrap variant={blok.variant} {...storyblokEditable(blok)}>
        {blok.image.filename && (
          <CardImage>
            {/* <img
              src={blok.image.filename}
              alt={blok.image.alt}
              className={cn(
                'h-[260px] min-w-full rounded-lg bg-slate-100 object-cover'
              )}
            /> */}
            <Image
              src={blok.image.filename}
              alt={blok.image.alt}
              height={260}
              width={260 * aspectRatio}
              // fill
              loader={loader}
              className={cn(
                'h-[260px] min-w-full rounded-lg bg-slate-100 object-cover'
              )}
              sizes="400px, 800px"
            />
          </CardImage>
        )}
        <CardBody>
          {blok.kicker && (
            <div className="text-xs uppercase leading-none text-slate-400">
              {blok.kicker} - {blok.variant}
            </div>
          )}
          {blok.title && (
            <h2 className="text-3xl font-semibold leading-tight">
              {blok.title}
            </h2>
          )}
          {blok.description && <Richtext field={blok.description} />}
          {blok.buttons && (
            <div className="flex gap-4">
              {blok.buttons.map((it, id) => (
                <StoryblokComponent key={id} blok={it} />
              ))}
            </div>
          )}
        </CardBody>
      </CardWrap>
    </Section>
  )
}
