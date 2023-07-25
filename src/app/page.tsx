import ShortcutButton from '@/components/GetStartedClientButton'
import Title from '@/components/Title'

export default function Home() {
  return (
    <main className="center flex h-full w-full items-center justify-center p-24">
      <div className="flex flex-col items-baseline gap-6">
        <Title>Igor N Faustino</Title>
        <p className="max-w-xl">
          Hi, I{"'"}m Igor. I{"'"}m currently working as a Web Developer at
          Objective
        </p>
        <ShortcutButton />
      </div>
    </main>
  )
}
