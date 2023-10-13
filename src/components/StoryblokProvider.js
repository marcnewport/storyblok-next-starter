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
  accessToken: 'r3HG0cZz6slNmpP9gQuZ0Att',
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
