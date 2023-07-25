import AboutItem from '@/components/AboutItem'
import Divider from '@/components/Divider'
import MarkdownText from '@/components/MarkdownText'
import SectionTitle from '@/components/SectionTitle'
import SubTitle from '@/components/SubTitle'
import { getPage } from '@/data/getPage'

export default async function AboutPage() {
  const page = await getPage('About Me')
  return (
    <div className="container max-w-2xl pb-16 pt-16">
      <SubTitle>{page?.title}</SubTitle>

      <MarkdownText className="mt-5 text-justify" source={page?.description} />

      <Divider />

      <SectionTitle>Career</SectionTitle>

      <div className="mt-5 flex flex-col gap-5">
        <AboutItem.Root>
          <AboutItem.Position
            position="fullstack developer"
            company="Objective"
            company_url="https://www.objective.com.br/"
          />
          <AboutItem.Location city="Maringá" country="Brazil" />
          <AboutItem.Period start="2023-03-15" end="2023-04-15" />
        </AboutItem.Root>

        <AboutItem.Root>
          <AboutItem.Position
            position="fullstack developer"
            company="Objective"
            company_url="https://www.objective.com.br/"
          />
          <AboutItem.Location city="Maringá" country="Brazil" />
          <AboutItem.Period start="2023-03-15" end="2023-04-15" />
        </AboutItem.Root>

        <AboutItem.Root>
          <AboutItem.Position
            position="fullstack developer"
            company="Objective"
            company_url="https://www.objective.com.br/"
          />
          <AboutItem.Location city="Maringá" country="Brazil" />
          <AboutItem.Period start="2023-03-15" end="2023-04-15" />
        </AboutItem.Root>
      </div>

      <Divider />

      <SectionTitle>Education</SectionTitle>

      <div className="mt-5 flex flex-col gap-5">
        <AboutItem.Root>
          <AboutItem.Position
            position="MASTER IN INFORMATION SYSTEM"
            company="Instituto Politécnico de Bragança"
          />
          <AboutItem.Location city="Bragança" country="Portugal" />
          <AboutItem.Year start="2019" end="2020" />
        </AboutItem.Root>

        <AboutItem.Root>
          <AboutItem.Position
            position="BACHELOR OF COMPUTER SCIENCE"
            company="Federal University of Technology - Paraná"
          />
          <AboutItem.Location city="Campo Mourão" country="Brazil" />
          <AboutItem.Year start="2016" end="2020" />
        </AboutItem.Root>
      </div>
    </div>
  )
}
