import Divider from '@/components/Divider'
import MarkdownText from '@/components/MarkdownText'
import Title from '@/components/Title'
import { getAllPodcasts } from '@/data/getAllPodcasts'
import { getPage } from '@/data/getPage'

export default async function page() {
  const episodes = await getAllPodcasts()
  const page = await getPage('Podcast')

  console.log(page)

  return (
    <>
      <Title>{page?.title}</Title>

      <MarkdownText className="mt-5 text-justify" source={page?.description} />

      <Divider />
    </>
  )
}
