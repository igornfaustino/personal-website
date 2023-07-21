import { ReactNode } from 'react'

interface CareerRootProps {
  children: ReactNode
}

export default function Root({ children }: CareerRootProps) {
  return <div>{children}</div>
}
