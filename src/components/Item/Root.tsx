import Link from 'next/link'
import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
  path?: string
}

export default function Root({ children, path }: RootProps) {
  if (!path) return <div className="py-3">{children}</div>
  return (
    <div className="cursor-pointer rounded-md py-3 transition-all hover:scale-[1.03]">
      <Link href={path}>{children}</Link>
    </div>
  )
}
