import { getPostReadingTime } from '@/common/getPostReadingTime'
import InternalLink from '@/components/InternalLink'
import MarkdownText from '@/components/MarkdownText'
import PostDateAndReadTime from '@/components/PostDateAndReadTime'
import Title from '@/components/Title'
import { getPost } from '@/data/getPost'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)
  const formattedDate = format(parseISO(post.date), 'LLL dd, yyyy')
  const readingTime = getPostReadingTime(post.content)
  return (
    <div>
      <div className="mb-2 flex w-full justify-between text-sm">
        <InternalLink href="/blog">← Back</InternalLink>
        <PostDateAndReadTime
          formattedDate={formattedDate}
          readingTime={readingTime}
        />
      </div>
      <Title className="min-w-full">{post?.title}</Title>
      {post.coverImage && (
        <Image
          src={post.coverImage.url}
          alt="post cover image"
          className="w-full"
          width={post.coverImage.width}
          height={post.coverImage.height}
        />
      )}
      <p className="pt-2 text-justify text-sm text-slate-400">
        {post.description}
      </p>

      <div className="mt-12" />

      <MarkdownText className="mt-5 text-justify" source={post?.content} />
    </div>
  )
}
