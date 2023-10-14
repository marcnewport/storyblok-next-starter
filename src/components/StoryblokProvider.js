'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { Page } from '@/components/page'
import { Teaser } from '@/components/teaser'
import { Grid } from '@/components/grid'
import { Feature } from '@/components/feature'

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
