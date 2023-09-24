import { getAllPages } from '@/data/getAllPages'
import { getAllPosts } from '@/data/getAllPosts'
import { ReactNode } from 'react'
import SpotlightClient from './SpotlightClient'

interface SpotlightProps {
  children: ReactNode
}

export const socialMediaActions = [
  {
    id: 'linkedin',
    name: 'Linkedin',
    shortcut: ['l'],
    keywords: 'linkedin',
    section: 'Follow me',
    externalPath: 'https://www.linkedin.com/in/igornfaustino',
  },
  {
    id: 'github',
    name: 'Github',
    shortcut: ['a'],
    keywords: 'github',
    section: 'Follow me',
    externalPath: 'https://github.com/igornfaustino',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    shortcut: ['t'],
    keywords: 'twitter',
    section: 'Follow me',
    externalPath: 'https://twitter.com/igornfaustino',
  },
  {
    id: 'youtube',
    name: 'Youtube',
    shortcut: ['y'],
    keywords: 'youtube',
    section: 'Follow me',
    externalPath: 'https://www.youtube.com/channel/UCIOtxH-8UsIX8J7iHZ8px5w',
  },
]

export default async function Spotlight({ children }: SpotlightProps) {
  const posts = await getAllPosts()
  const pages = await getAllPages()

  let actions: SpotlightData[] = []

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

  actions = actions.concat(socialMediaActions)
  return <SpotlightClient data={actions}>{children}</SpotlightClient>
}
