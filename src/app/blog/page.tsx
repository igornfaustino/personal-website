import Divider from '@/components/Divider'
import Item from '@/components/Item'
import MarkdownText from '@/components/MarkdownText'
import SubTitle from '@/components/SubTitle'
import { getAllPosts } from '@/data/getAllPosts'
import { getPage } from '@/data/getPage'

export default async function BlogPage() {
  const page = await getPage('Blog')
  const posts = await getAllPosts()

  return (
    <div className="container max-w-2xl pb-16 pt-16">
      <SubTitle>{page?.title}</SubTitle>

      <MarkdownText className="mt-5 text-justify" source={page?.description} />

      <Divider />

      {posts.map((post) => (
        <Item.Root key={post.id} path={`/blog/${post.slug}`}>
          <Item.PostTitle post={post} />
          <Item.Markdown text={post.description} />
        </Item.Root>
      ))}
    </div>
  )
}
