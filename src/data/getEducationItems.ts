import { HYGRAPH_API } from '@/common/API'
import { JsonResponseType } from '@/common/JsonResponseType'
import { TIME } from '@/common/Time'

const cacheTime = 10 * TIME.MINUTE

export async function getEducationItems() {
  const response = await fetch(HYGRAPH_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
                educations(orderBy: startYear_DESC) {
                    id
                    course
                    endYear
                    startYear
                    school
                    location
                    localizations {
                      course
                      endYear
                      location
                      school
                      startYear
                    }
                }
            }`,
    }),
    next: {
      revalidate: cacheTime,
    },
  })
  const { data }: JsonResponseType<{ educations: EducationItem[] }> =
    await response.json()
  return data.educations
}

type EducationItem = {
  id: string
  course: string
  endYear?: number
  startYear: number
  school: string
  location: string
  localizations: {
    course: string
    endYear: number
    location: string
    school: string
    startYear: number
  }[]
}
