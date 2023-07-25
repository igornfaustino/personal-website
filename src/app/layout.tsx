import Header from '@/components/Header'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Spotlight from '@/components/Spotlight'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Spotlight>
          <div
            className={`${inter.className} text-md flex min-h-screen flex-col items-center justify-between bg-slate-300 text-theme-grey accent-theme-primary dark:bg-theme-grey dark:text-slate-100`}
          >
            <Header />
            {children}
            <SocialMediaLinks />
          </div>
        </Spotlight>
      </body>
    </html>
  )
}
