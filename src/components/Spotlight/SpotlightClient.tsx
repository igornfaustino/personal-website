'use client'

import { ReactNode } from 'react'

import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar'
import { useRouter } from 'next/navigation'

type ItemProps = {
  active: boolean
  item:
    | string
    | {
        name: string
      }
}

const ResultItem = function ({ item, active }: ItemProps) {
  if (typeof item === 'string')
    return (
      <div className="m-0 bg-theme-grey p-2 text-xs uppercase text-theme-white/50">
        {item}
      </div>
    )
  return (
    <div
      className={`h-full cursor-pointer p-2  ${
        active ? 'bg-theme-primary' : 'dark:bg-theme-grey'
      } `}
    >
      {item.name}
    </div>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return <KBarResults items={results} onRender={ResultItem} />
}

interface SpotlightClientProps {
  children: ReactNode
  data: SpotlightData[]
}

export default function SpotlightClient({
  children,
  data,
}: SpotlightClientProps) {
  const router = useRouter()
  const actions = data.map(({ path, ...values }) => ({
    ...values,
    perform: path ? () => router.push(`/${path}`) : undefined,
  }))

  return (
    <KBarProvider
      actions={actions}
      options={{
        enableHistory: true,
      }}
    >
      <KBarPortal>
        <KBarPositioner className="h-full backdrop-blur-sm transition-all dark:bg-spotilight-bg-dark/30 dark:text-theme-white">
          <KBarAnimator className="w-full max-w-xl overflow-hidden scroll-smooth rounded-lg border-0 bg-theme-grey">
            <KBarSearch className="m-0 box-border w-full p-2 outline-none dark:bg-theme-grey" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}
