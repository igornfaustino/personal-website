import SubTitle from '@/components/atoms/SubTitle'

export default function AboutPage() {
  return (
    <div className="container max-w-2xl">
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

      <hr className="mb-6 mt-6" />
    </div>
  )
}
