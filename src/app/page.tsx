import ShortcutButton from '@/components/atoms/ShortCut'

export default function Home() {
  return (
    <main className="center flex h-full w-full items-center justify-center p-24">
      <div className="flex flex-col items-baseline gap-6">
        <h1 className="max-w-fit rounded-sm bg-theme-grey p-3 text-5xl font-semibold uppercase text-slate-100 dark:bg-slate-100 dark:text-theme-grey">
          Igor N Faustino
        </h1>
        <p className="max-w-xl">
          Hi, I{"'"}m Igor. I{"'"}m currently working as a Web Developer at
          Objective
        </p>
        <ShortcutButton />
      </div>
    </main>
  )
}
