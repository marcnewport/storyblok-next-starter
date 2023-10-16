'use client'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Logo } from './logo'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const items = [
  {
    label: 'About',
    href: '#',
    children: [
      {
        label: 'Our Vision',
        href: '#',
      },
      {
        label: 'Our Team',
        href: '',
      },
      {
        label: 'Our Partners',
        href: '',
      },
    ],
  },
  {
    label: 'Services',
    href: '#',
    children: [
      {
        label: 'Branding & Design',
        description: 'Description goes here',
        href: '#',
      },
      {
        label: 'Content & Media',
        description: 'Description goes here',
        href: '#',
      },
      {
        label: 'Marketing & SEO',
        description: 'Description goes here',
        href: '#',
      },
      {
        label: 'Development & Hosting',
        description: 'Description goes here',
        href: '#',
      },
    ],
  },
  {
    label: 'Projects',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
]

export function Header() {
  return (
    <header className="flex items-center gap-4 p-4">
      <h1>
        <a href="/">
          <Logo className="h-5 w-auto" />
          <span className="sr-only">Company</span>
        </a>
      </h1>
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((it, id) => (
            <NavigationMenuItem key={id}>
              {it.children ? (
                <>
                  <NavigationMenuTrigger>{it.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {it.children.map((it, id) => (
                        <ListItem key={id} href={it.href} title={it.label}>
                          {it.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  href={it.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {it.label}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuViewport className="bg-white" />
      </NavigationMenu>
    </header>
  )
}

Header.displayName = 'Header'

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'
