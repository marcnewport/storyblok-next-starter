/** 1. Tag it as client component */
'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

/** 2. Import your components */
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'
import Grid from '@/components/Grid'
import Feature from '@/components/Feature'

/** 3. Initialize it as usual */
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

export default function StoryblokProvider({ children }) {
  return children
}
