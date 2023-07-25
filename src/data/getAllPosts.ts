import { JsonResponseType } from '@/common/JsonResponseType'
import { TIME } from '@/common/Time'

const cacheTime = 10 * TIME.MINUTE

export async function getAllPosts() {
  const response = await fetch(process.env.HYGRAPH_API as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
                posts(orderBy: date_DESC) {
                    slug
                    title
                    description
                    date
                }
            }`,
    }),
    next: {
      revalidate: cacheTime,
    },
  })
  const { data }: JsonResponseType<{ posts: PostItem[] }> =
    await response.json()
  return data.posts
}

type PostItem = {
  slug: string
  title: string
  description: string
  date: string
}
