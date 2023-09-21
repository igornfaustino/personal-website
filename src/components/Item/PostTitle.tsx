import { format, parseISO } from 'date-fns'

interface PostTitleProps {
  post: {
    title: string
    date: string
    content: string
  }
}

const getPostReadingTime = (content: string) => {
  const wpm = 225
  const words = content.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)

  return time
}

export default function PostTitle({ post }: PostTitleProps) {
  const formattedDate = format(parseISO(post.date), 'LLL dd, yyyy')
  const readingTime = getPostReadingTime(post.content)
  return (
    <div className="flex items-baseline justify-between">
      <h4 className="font-semibold uppercase text-theme-primary">
        {post.title}
      </h4>
      <span className="text-xs">
        {formattedDate} - {readingTime} min read
      </span>
    </div>
  )
}
