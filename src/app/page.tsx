import ShortcutButton from '@/components/GetStartedClientButton'
import MainTitle from '@/components/MainTitle'
import MarkdownText from '@/components/MarkdownText'
import { getPage } from '@/data/getPage'

export default async function Home() {
  const page = await getPage('Home')
  return (
    <main className="center flex h-full w-full items-center justify-center p-24">
      <div className="flex flex-col items-baseline gap-6">
        <MainTitle>{page?.title}</MainTitle>
        <MarkdownText className="max-w-xl" source={page?.description} />
        <ShortcutButton />
      </div>
    </main>
  )
}
