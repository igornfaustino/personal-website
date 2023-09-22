import Divider from '@/components/Divider'
import Item from '@/components/Item'
import MarkdownText from '@/components/MarkdownText'
import Title from '@/components/Title'
import { getAllPosts } from '@/data/getAllPosts'
import { getPage } from '@/data/getPage'

export default async function BlogPage() {
  const page = await getPage('Blog')
  const posts = await getAllPosts()

  return (
    <>
      <Title>{page?.title}</Title>

      <MarkdownText className="mt-5 text-justify" source={page?.description} />

      <Divider />

      {posts.map((post, idx) => (
        <Item.Root key={post.id} path={`/blog/${post.slug}`}>
          <div className="flex items-center justify-start gap-3">
            <div className="w-full">
              <Item.Title>{post.title}</Item.Title>
              <Item.Markdown text={post.description} />
              <div className="h-2" />
              <Item.PostMetadata post={post} />
            </div>
            {post.coverImage && (
              <Item.Image
                src={post.coverImage.url}
                width={post.coverImage.width}
                height={post.coverImage.width}
                alt={`cover image for post ${post.title}`}
                className="w-1/3"
              />
            )}
          </div>
        </Item.Root>
      ))}
    </>
  )
}
