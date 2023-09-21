import { getPostReadingTime } from '@/common/getPostReadingTime'
import { format, parseISO } from 'date-fns'
import PostDateAndReadTime from '../PostDateAndReadTime'

interface PostTitleProps {
  post: {
    title: string
    date: string
    content: string
  }
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
        <PostDateAndReadTime
          formattedDate={formattedDate}
          readingTime={readingTime}
        />
      </span>
    </div>
  )
}
