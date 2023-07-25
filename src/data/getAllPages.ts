import { HYGRAPH_API } from '@/common/API'
import { JsonResponseType } from '@/common/JsonResponseType'
import { TIME } from '@/common/Time'

const cacheTime = 10 * TIME.MINUTE

export async function getAllPages() {
  const response = await fetch(HYGRAPH_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
                pages(orderBy: spotlightOrder_ASC) {
                    locale
                    url
                    localizations {
                        title
                        description
                        locale
                        spotlightTitle
                    }
                    description
                    title
                    spotlightTitle
                }
            }`,
    }),
    next: {
      revalidate: cacheTime,
    },
  })
  const { data }: JsonResponseType<{ pages: PageItem[] }> =
    await response.json()
  return data.pages
}

type PageItem = {
  locale: string
  title: string
  url: string
  description: string
  spotlightTitle: string
  localizations: {
    locale: string
    title: string
    description: string
    spotlightTitle: string
  }[]
}
