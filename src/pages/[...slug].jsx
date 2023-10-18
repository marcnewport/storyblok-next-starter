import Head from 'next/head'
import { getStoryblokApi } from '@storyblok/react'

export default function Page() {
  return (
    <div>
      <Head>{/* <MetaData /> */}</Head>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug ? params.slug.join('/') : 'home'

  const storyblokApi = getStoryblokApi()
  const response = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  })

  return {
    props: { ...response.data },
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
