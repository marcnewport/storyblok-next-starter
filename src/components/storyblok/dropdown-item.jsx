import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'

export function DropdownItem({ blok }) {
  // TODO : use internal link if blok.link.linktype === 'story'
  // TODO : put small circular image?
  console.log(blok.image)
  return (
    <li {...storyblokEditable(blok)}>
      <NavigationMenuLink asChild>
        <a
          href={blok.link.url}
          className="flex select-none items-center gap-4 rounded-md p-4 no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
        >
          {blok.image.filename ? (
            <img src={blok.image.filename} alt="" />
          ) : null}
          <div>
            <div className="text-sm font-medium">{blok.label}</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              {blok.description}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
