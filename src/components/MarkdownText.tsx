import { MDXRemote } from 'next-mdx-remote/rsc'
import ExternalLink from './ExternalLink'

interface MarkdownTextProps {
  className?: string
  source?: string
}

export default function MarkdownText({ className, source }: MarkdownTextProps) {
  return (
    <div className={className}>
      <MDXRemote
        source={source ?? ''}
        components={{
          p: ({ children }) => (
            <p className="mb-6 text-justify text-base">{children}</p>
          ),
          a: ({ children }) => (
            <ExternalLink className="border-b">{children}</ExternalLink>
          ),
        }}
      />
    </div>
  )
}
