import AboutItem from '@/components/AboutItem'
import Divider from '@/components/Divider'
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

      <div className="mt-5 flex flex-col gap-5">
        {jobItems.map((job) => (
          <AboutItem.Root key={job.id}>
            <AboutItem.Position
              position={job.position}
              company={job.company}
              company_url={job.link}
            />
            <AboutItem.Location location={job.location} />
            <AboutItem.Period start={job.start} end={job.end} />
          </AboutItem.Root>
        ))}
      </div>

      <Divider />

      <SectionTitle>Education</SectionTitle>

      <div className="mt-5 flex flex-col gap-5">
        {educationItems.map((education) => (
          <AboutItem.Root key={education.id}>
            <AboutItem.Position
              position={education.course}
              company={education.school}
            />
            <AboutItem.Location location={education.location} />
            <AboutItem.Year
              start={education.startYear.toString()}
              end={education.endYear?.toString()}
            />
          </AboutItem.Root>
        ))}
      </div>
    </div>
  )
}
