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
import { forwardRef } from 'react'
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
import Link from 'next/link'

export function SiteHeader({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="bg-white px-6 py-4">
      <div className="m-auto flex max-w-4xl items-center gap-2">
        <h1>
          <Link href="/">
            <img src={blok.logo.filename} alt="" className="h-8 w-auto" />
            <span className="sr-only">{blok.site_name}</span>
          </Link>
        </h1>
        {blok.navigation_menu && (
          <>
            <div className="hidden sm:block">
              {/* <DesktopNavigation blok={blok} /> */}
            </div>
            <div className="ml-auto sm:hidden">
              <MobileNavigation blok={blok} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

SiteHeader.displayName = 'SiteHeader'

function MobileNavigation({ blok }) {
  console.log(blok)
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

MobileNavigation.displayName = 'MobileNavigation'

function MobileMenuItem({ id, blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.component === 'menu_panel' && (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`blok-${id}`}>
            <AccordionTrigger>{blok.label}</AccordionTrigger>
            <AccordionContent className="flex">
              {blok.content.map((it, id) => it.name ?? it.title)}

              {/* <ul className="list-none">
              {blok.dropdown_panel.map((it, id) => (
                <li key={id} {...storyblokEditable(it)}>
                  <ItemLink {...it} className="p-0 py-4 text-sm" />
                </li>
              ))}
            </ul> */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
      {blok.component === 'menu_link' && (
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

MobileMenuItem.displayName = 'MobileMenuItem'

// function DesktopNavigation({ blok }) {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         {blok.navigation_menu.map((it) => (
//           <DesktopMenuItem key={it._uid} blok={it} />
//         ))}
//       </NavigationMenuList>
//       <NavigationMenuViewport className="bg-white" />
//     </NavigationMenu>
//   )
// }

// DesktopNavigation.displayName = 'DesktopNavigation'

// function DesktopMenuItem({ blok }) {
//   return (
//     <NavigationMenuItem {...storyblokEditable(blok)}>
//       {blok.dropdown_panel.length ? (
//         <>
//           <NavigationMenuTrigger>{blok.label}</NavigationMenuTrigger>
//           <NavigationMenuContent className="-absolute">
//             <ul className="flex w-[400px] flex-col p-2 md:w-[500px] lg:w-[600px]">
//               {blok.dropdown_panel.map((it, id) => (
//                 <NavigationMenuLink asChild key={id}>
//                   <ItemLink {...it} />
//                 </NavigationMenuLink>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </>
//       ) : (
//         <NavigationMenuLink
//           href={blok.link.url}
//           className={navigationMenuTriggerStyle()}
//         >
//           {blok.label}
//         </NavigationMenuLink>
//       )}
//     </NavigationMenuItem>
//   )
// }

// DesktopMenuItem.displayName = 'DesktopMenuItem'

const ItemLink = forwardRef(
  ({ link, image, description, label, className }, ref) => (
    <a
      ref={ref}
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
)

ItemLink.displayName = 'ItemLink'
