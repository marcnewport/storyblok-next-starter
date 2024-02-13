import {
  StoryblokComponent,
  getStoryblokApi,
  useStoryblokState,
} from '@storyblok/react'

export default function Home({ story }) {
  story = useStoryblokState(story)

  return <StoryblokComponent blok={story.content} title={story.name} />
}

export async function getStaticProps() {
  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.get('cdn/stories/home', {
    version: 'draft',
  })

  // const { data: header } = await storyblokApi.get(
  //   'cdn/stories/site/site-header',
  //   {
  //     version: 'draft',
  //   }
  // )

  return {
    props: {
      // header: header.story ?? false,
      story: data.story ?? false,
    },
    revalidate: 3600,
  }
}
