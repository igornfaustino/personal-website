import Divider from '@/components/Divider'
import Item from '@/components/Item'
import MarkdownText from '@/components/MarkdownText'
import SubTitle from '@/components/SubTitle'
import { getPage } from '@/data/getPage'
import { getProjects } from '@/data/getProjects'

export default async function ProjectsPage() {
  const page = await getPage('Projects')
  const projects = getProjects()

  return (
    <div className="container max-w-2xl pb-16 pt-16">
      <SubTitle>{page?.title}</SubTitle>

      <MarkdownText className="mt-5 text-justify" source={page?.description} />

      <Divider />

      {(await projects).map((project) => (
        <Item.Root key={project.id}>
          <Item.Title>{project.title}</Item.Title>
          <Item.Markdown text={project.description} />
        </Item.Root>
      ))}
    </div>
  )
}
