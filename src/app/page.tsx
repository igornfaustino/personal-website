import ShortcutButton from '@/components/GetStartedClientButton'
import MarkdownText from '@/components/MarkdownText'
import Title from '@/components/Title'
import { getPage } from '@/data/getPage'

export default async function Home() {
  const page = await getPage('Home')
  return (
    <main className="center flex h-full w-full items-center justify-center p-24">
      <div className="flex flex-col items-baseline gap-6">
        <Title>{page?.title}</Title>
        <MarkdownText className="max-w-xl" source={page?.description} />
        <ShortcutButton />
      </div>
    </main>
  )
}
