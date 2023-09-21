import ExternalLink from '@/components/ExternalLink'
import { ReactNode } from 'react'

export type ComponentProps = {
  children: ReactNode
}

export const markdownBaseComponents = {
  p: ({ children }: ComponentProps) => (
    <p className="mb-6 text-justify text-base">{children}</p>
  ),
  a: ({ children }: ComponentProps) => (
    <ExternalLink className="border-b">{children}</ExternalLink>
  ),
}
