import { getStoryblokApi } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'

export default async function Home() {
  const { data } = await fetchData()

  return <StoryblokStory story={data.story} />
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/home`, {
    version: 'draft',
  })
}
