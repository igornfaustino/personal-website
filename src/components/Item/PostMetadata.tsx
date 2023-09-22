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
    <div className="text-xs font-bold">
      <PostDateAndReadTime
        formattedDate={formattedDate}
        readingTime={readingTime}
      />
    </div>
  )
}
