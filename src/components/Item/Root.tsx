import Link from 'next/link'
import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
  path?: string
}

export default function Root({ children, path }: RootProps) {
  if (!path) return <div className="py-3">{children}</div>
  return (
    <div className="cursor-pointer rounded-md px-3 py-3 transition-all hover:bg-black/30 hover:backdrop-blur-sm">
      <Link href={path}>{children}</Link>
    </div>
  )
}
