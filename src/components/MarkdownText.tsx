import { markdownBaseComponents } from '@/common/MarkdownBaseComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface MarkdownTextProps {
  className?: string
  source?: string
}

export default function MarkdownText({ className, source }: MarkdownTextProps) {
  return (
    <div className={`prose max-w-none dark:prose-invert ${className} `}>
      <MDXRemote
        source={source ?? ''}
        components={markdownBaseComponents as any}
      />
    </div>
  )
}
