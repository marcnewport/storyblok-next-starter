import { storyblokEditable } from '@storyblok/react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useLayout } from '@/hooks/useLayout'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '../ui/sheet'
import { XIcon } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { cn } from '@/lib/utils'

export function SiteHeader({ blok }) {
  const { isMobile } = useLayout()
  // TODO : mobile version
  return (
    <div {...storyblokEditable(blok)} className="flex items-center gap-4 p-4">
      <h1>
        {/* TODO : make configurable */}
        <a href="#">
          <Logo className="h-5 w-auto" />
          <span className="sr-only">Company</span>
        </a>
      </h1>
      {blok.navigation_menu ? (
        <>
          {isMobile ? (
            <MobileNavigation blok={blok} />
          ) : (
            <DesktopNavigation blok={blok} />
          )}
        </>
      ) : null}
    </div>
  )
}

function Logo({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 283 64"
      className={className}
    >
      <path
        fill="black"
        d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
      />
    </svg>
  )
}

function MobileNavigation({ blok }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="ml-auto">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <Button variant="ghost" className="relative -left-3 -top-3">
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetClose>
        <div className="w-full">
          {blok.navigation_menu.map((it, id) => (
            <MobileMenuItem key={id} id={id} blok={it} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

function MobileMenuItem({ id, blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.dropdown_panel.length ? (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`blok-${id}`}>
            <AccordionTrigger>{blok.label}</AccordionTrigger>
            <AccordionContent>
              <ul className="list-none">
                {blok.dropdown_panel.map((it, id) => (
                  <li key={id} {...storyblokEditable(it)}>
                    <ItemLink {...it} className="p-0 py-4 text-sm" />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <a
          href={blok.link.url}
          className="flex items-center justify-between border-b py-4 font-medium hover:underline"
        >
          {blok.label}
        </a>
      )}
    </div>
  )
}

function DesktopNavigation({ blok }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {blok.navigation_menu.map((it) => (
          <DesktopMenuItem key={it._uid} blok={it} />
        ))}
      </NavigationMenuList>
      <NavigationMenuViewport className="bg-white" />
    </NavigationMenu>
  )
}

function DesktopMenuItem({ blok }) {
  return (
    <NavigationMenuItem {...storyblokEditable(blok)}>
      {blok.dropdown_panel.length ? (
        <>
          <NavigationMenuTrigger>{blok.label}</NavigationMenuTrigger>
          <NavigationMenuContent className="-absolute">
            <ul className="flex w-[400px] flex-col p-2 md:w-[500px] lg:w-[600px]">
              {blok.dropdown_panel.map((it, id) => (
                <NavigationMenuLink asChild key={id}>
                  <ItemLink {...it} />
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
        <NavigationMenuLink
          href={blok.link.url}
          className={navigationMenuTriggerStyle()}
        >
          {blok.label}
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  )
}

function ItemLink({ link, image, description, label, className }) {
  return (
    <a
      href={link.url}
      className={cn(
        'flex select-none items-center gap-4 rounded-md p-4 no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100',
        className
      )}
    >
      {image.filename ? <img src={image.filename} alt="" /> : null}
      <div>
        <div className="text-sm font-medium">{label}</div>
        <p className="line-clamp-2 text-sm leading-snug text-slate-400">
          {description}
        </p>
      </div>
    </a>
  )
}
