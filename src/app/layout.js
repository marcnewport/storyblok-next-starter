import './globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { StoryblokProvider } from '@/components/StoryblokProvider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

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
        <body className="flex flex-col">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  )
}
