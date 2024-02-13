import {
  StoryblokComponent,
  getStoryblokApi,
  useStoryblokState,
} from '@storyblok/react'

export default function Slug({ story }) {
  story = useStoryblokState(story)

  return <StoryblokComponent blok={story.content} title={story.name} />
}

export async function getStaticProps({ params }) {
  const slug = params.slug ? params.slug.join('/') : 'home'
  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  })

  const { data: headerData } = await storyblokApi.get(
    'cdn/stories/site/site-header',
    {
      version: 'draft',
    }
  )

  const isHeader = slug === 'site/site-header'
  const header = isHeader ? false : headerData.story ?? false

  return {
    props: {
      header,
      story: data.story ?? false,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    version: 'draft',
  })

  const paths = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return
    }

    const slug = data.links[linkKey].slug
    const splittedSlug = slug.split('/')

    paths.push({ params: { slug: splittedSlug } })
  })

  return {
    paths: paths,
    fallback: false,
  }
}
