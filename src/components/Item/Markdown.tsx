import {
  ComponentProps,
  markdownBaseComponents,
} from '@/common/MarkdownBaseComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface MarkdownTextProps {
  className?: string
  text?: string
}

const components = {
  ...markdownBaseComponents,
  p: ({ children }: ComponentProps) => (
    <p className="mb-0 text-justify text-base">{children}</p>
  ),
}

export default function Markdown({
  className,
  text: source,
}: MarkdownTextProps) {
  return (
    <div className={className}>
      <MDXRemote source={source ?? ''} components={components as any} />
    </div>
  )
}
