import AboutItem from '@/components/AboutItem'
import Divider from '@/components/Divider'
import SectionTitle from '@/components/SectionTitle'
import SubTitle from '@/components/SubTitle'

export default function AboutPage() {
  return (
    <div className="container max-w-2xl pb-16 pt-16">
      <SubTitle>About Me</SubTitle>

      <div className="mt-5 flex flex-col gap-3">
        <p className="text-justify">
          Hi, my name is Igor. I've been addicted to software engineering since
          2016 when I first joined the university coursing a computer science
          degree.
        </p>

        <p className="text-justify">
          I'm currently working as a software developer at Objective where I
          help build solutions with high quality!
        </p>

        <p className="text-justify">
          I'm living in Brazil and when I'm not working I'll probably be playing
          games, reading books or going for a run.
        </p>
      </div>

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
