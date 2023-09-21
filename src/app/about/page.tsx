import Divider from '@/components/Divider'
import Item from '@/components/Item'
import MarkdownText from '@/components/MarkdownText'
import SectionTitle from '@/components/SectionTitle'
import SubTitle from '@/components/SubTitle'
import { getJobItems } from '@/data/getCareerItems'
import { getEducationItems } from '@/data/getEducationItems'
import { getPage } from '@/data/getPage'

export default async function AboutPage() {
  const page = await getPage('About Me')
  const educationItems = await getEducationItems()
  const jobItems = await getJobItems()

  return (
    <div className="container max-w-2xl pb-16 pt-16">
      <SubTitle>{page?.title}</SubTitle>

      <MarkdownText className="mt-5 text-justify" source={page?.description} />

      <Divider />

      <SectionTitle>Career</SectionTitle>

      <div className="mt-5 flex flex-col">
        {jobItems.map((job) => (
          <Item.Root key={job.id}>
            <Item.Position
              position={job.position}
              company={job.company}
              company_url={job.link}
            />
            <Item.Location location={job.location} />
            <Item.Period start={job.start} end={job.end} />
          </Item.Root>
        ))}
      </div>

      <Divider />

      <SectionTitle>Education</SectionTitle>

      <div className="mt-5 flex flex-col">
        {educationItems.map((education) => (
          <Item.Root key={education.id}>
            <Item.Position
              position={education.course}
              company={education.school}
            />
            <Item.Location location={education.location} />
            <Item.Year
              start={education.startYear.toString()}
              end={education.endYear?.toString()}
            />
          </Item.Root>
        ))}
      </div>
    </div>
  )
}
