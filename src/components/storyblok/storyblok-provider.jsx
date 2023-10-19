import { storyblokInit, apiPlugin } from '@storyblok/react'
import { Page } from './page'
import { Teaser } from './teaser'
import { Grid } from './grid'
import { Feature } from './feature'
import { SiteHeader } from './site-header'
import { Hero } from './hero'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    site_header: SiteHeader,
    hero: Hero,
  },
})

export function StoryblokProvider({ children }) {
  return children
}
