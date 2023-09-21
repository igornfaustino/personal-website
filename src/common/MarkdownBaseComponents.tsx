import ExternalLink from '@/components/ExternalLink'
import Title from '@/components/Item/Title'
import SubTitle from '@/components/SubTitle'
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
  h1: Title,
  h2: SubTitle,
}
