import Head from 'next/head'
import {
  StoryblokComponent,
  getStoryblokApi,
  useStoryblokState,
} from '@storyblok/react'

export default function Home({ story }) {
  story = useStoryblokState(story)

  return <StoryblokComponent blok={story.content} />
}

export async function getStaticProps() {
  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.get('cdn/stories/home', {
    version: 'draft',
    resolve_links: 'url',
  })

  const { data: header } = await storyblokApi.get('cdn/stories/site-header', {
    version: 'draft',
    resolve_links: 'url',
  })

  return {
    props: {
      header: header.story ?? false,
      story: data.story ?? false,
    },
    revalidate: 3600,
  }
}
