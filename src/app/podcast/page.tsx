import Divider from '@/components/Divider'
import Item from '@/components/Item'
import MarkdownText from '@/components/MarkdownText'
import Title from '@/components/Title'
import { getAllPodcasts } from '@/data/getAllPodcasts'
import { getPage } from '@/data/getPage'

export default async function page() {
  const episodes = await getAllPodcasts()
  const page = await getPage('Podcast')

  return (
    <>
      <Title>{page?.title}</Title>

      <MarkdownText className="mt-5 text-justify" source={page?.description} />

      <Divider />

      {episodes.map((episode) => (
        <Item.Root key={episode.id} externalLink={episode.link}>
          <Item.Title>{episode.title}</Item.Title>
          <Item.HtmlText
            html={episode.description}
            className="line-clamp-2 text-sm"
          />
        </Item.Root>
      ))}
    </>
  )
}
