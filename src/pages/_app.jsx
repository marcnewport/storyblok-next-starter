import './globals.css'
import { StoryblokProvider } from '@/components/storyblok/storyblok-provider'
import { Layout } from '@/components/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const { story, header } = pageProps

  // TODO : meta tags
  const siteName = header.content.site_name
  const pageName = story.content.title ?? story.name
  const title = [pageName, siteName].filter((it) => !!it).join(' | ')

  return (
    <StoryblokProvider>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout header={header}>
        <Component story={story} />
      </Layout>
    </StoryblokProvider>
  )
}
