import MarkdownText from '@/components/MarkdownText'
import Title from '@/components/Title'
import { getPost } from '@/data/getPost'

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)
  return (
    <div>
      <Title>{post?.title}</Title>

      <MarkdownText className="mt-5 text-justify" source={post?.content} />
    </div>
  )
}
