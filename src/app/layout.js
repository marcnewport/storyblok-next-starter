import './globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { StoryblokProvider } from '@/components/storyblok/storyblok-provider'
import { Header } from './header'
import { Footer } from './footer'

export const metadata = {
  title: 'Storyblok and Next.js 13',
  description: 'A Next.js and Storyblok app using app router ',
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className="flex flex-col bg-slate-100">
          <Header />
          <main className="bg-white">{children}</main>
          <footer className="relative mt-auto p-4">
            <Footer />
          </footer>
        </body>
      </html>
    </StoryblokProvider>
  )
}
