import { getAllPosts } from '@/data/getAllPosts'
import { ReactNode } from 'react'
import SpotlightClient from './SpotlightClient'

interface SpotlightProps {
  children: ReactNode
}

export default async function Spotlight({ children }: SpotlightProps) {
  const posts = await getAllPosts()

  const actions: SpotlightData[] = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'email',
      path: '',
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['a'],
      keywords: 'writing words',
      path: 'about',
    },
    {
      id: 'posts',
      name: 'Search blog post...',
      keywords: 'posts blog',
      section: 'Posts',
    },
  ]

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
