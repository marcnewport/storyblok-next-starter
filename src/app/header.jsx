'use client'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Logo } from './logo'

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
        href: '#',
      },
      {
        label: 'Content & Media',
        href: '#',
      },
      {
        label: 'Marketing & SEO',
        href: '#',
      },
      {
        label: 'Development & Hosting',
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
        <Logo className="h-5 w-auto" />
        <span className="sr-only">Company</span>
      </h1>
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((it, id) => (
            <NavigationMenuItem key={id}>
              {it.children ? (
                <>
                  <NavigationMenuTrigger>{it.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="min-w-[200px] flex-col bg-white p-4">
                      {it.children.map((it, id) => (
                        <li key={id}>
                          <NavigationMenuLink href={it.href}>
                            {it.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink href={it.href}>
                  {it.label}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
