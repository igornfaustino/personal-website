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

type ItemProps = {
  active: boolean
  item:
    | string
    | {
        name: string
      }
}

const ResultItem = function ({ item, active }: ItemProps) {
  if (typeof item === 'string') return <div>{item}</div>
  return (
    <div
      className={`cursor-pointer p-2  ${
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
  const actions = data.map(({ path, ...values }) => ({
    ...values,
    perform: () => (window.location.pathname = path),
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
          <KBarAnimator className="w-full max-w-xl overflow-hidden scroll-smooth rounded-lg border-0">
            <KBarSearch className="m-0 box-border w-full p-2 outline-none dark:bg-theme-grey" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}
