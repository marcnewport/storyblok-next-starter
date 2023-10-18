import './globals.css'
import { StoryblokProvider } from '@/components/storyblok/storyblok-provider'
import { Layout } from '@/components/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const { story, ...props } = pageProps
  // TODO : meta tags

  return (
    <StoryblokProvider>
      <Head>
        <title>
          {story.content.title ?? story.name ?? 'Storyblok Page'}
          {' | '}
          {'Site Name'}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout {...props}>
        <Component story={story} />
      </Layout>
    </StoryblokProvider>
  )
}
