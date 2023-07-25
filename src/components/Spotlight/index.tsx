import { ReactNode } from 'react'
import SpotlightClient from './SpotlightClient'

interface SpotlightProps {
  children: ReactNode
}

export default async function Spotlight({ children }: SpotlightProps) {
  // TODO: pass a json to create the actions on the client side... this is need in order to use function on the spotilight
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
  ]
  return <SpotlightClient data={actions}>{children}</SpotlightClient>
}
