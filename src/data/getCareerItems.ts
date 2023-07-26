import { HYGRAPH_API } from '@/common/API'
import { JsonResponseType } from '@/common/JsonResponseType'
import { TIME } from '@/common/Time'

const cacheTime = 10 * TIME.MINUTE

export async function getJobItems() {
  const response = await fetch(HYGRAPH_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
                jobs(orderBy: start_DESC) {
                  id
                  link
                  location
                  start
                  end
                  company
                  position
                  localizations {
                    start
                    location
                    company
                    end
                    position
                    link
                  }
                }
              }`,
    }),
    next: {
      revalidate: cacheTime,
    },
  })
  const { data }: JsonResponseType<{ jobs: JobItem[] }> = await response.json()
  return data.jobs
}

type JobItem = {
  id: string
  link: string
  location: string
  start: string
  end: string
  company: string
  position: string
  localizations: {
    location: string
    company: string
    position: string
  }
}
