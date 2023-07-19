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
      <body
        className={`${inter.className}  text-md min-h-screen bg-slate-300 text-theme-grey dark:bg-theme-grey dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  )
}
