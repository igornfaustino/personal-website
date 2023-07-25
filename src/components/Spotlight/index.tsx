import { getAllPages } from '@/data/getAllPages'
import { getAllPosts } from '@/data/getAllPosts'
import { ReactNode } from 'react'
import SpotlightClient from './SpotlightClient'

interface SpotlightProps {
  children: ReactNode
}

export default async function Spotlight({ children }: SpotlightProps) {
  const posts = await getAllPosts()
  const pages = await getAllPages()

  const actions: SpotlightData[] = []

  pages.forEach((page) => {
    actions.push({
      id: page.spotlightTitle,
      name: page.spotlightTitle,
      keywords: page.description,
      path: page.url ?? '/',
    })
  })

  actions.push({
    id: 'posts',
    name: 'Search blog post...',
    keywords: 'posts blog',
    section: 'Posts',
  })

  posts.forEach((post) => {
    actions.push({
      id: post.slug,
      name: post.title,
      keywords: post.description,
      path: `blog/${post.slug}`,
      parent: 'posts',
      section: 'Posts',
    })
  })
  return <SpotlightClient data={actions}>{children}</SpotlightClient>
}
