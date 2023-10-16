'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { Page } from './page'
import { Teaser } from './teaser'
import { Grid } from './grid'
import { Feature } from './feature'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
  },
})

export function StoryblokProvider({ children }) {
  return children
}
