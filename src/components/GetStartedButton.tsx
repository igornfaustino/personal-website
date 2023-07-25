'use client'
import { useKBar } from 'kbar'
import Keyboard from './Keyboard'

export default function GetStartedButton() {
  const isMac = /(Mac)/i.test(navigator.userAgent)
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

  const { query } = useKBar()

  const getButtonText = () => {
    if (isMobile) {
      return <>Tap to start →</>
    } else if (isMac) {
      return (
        <>
          Press <Keyboard>⌘</Keyboard> + <Keyboard>K</Keyboard> to start →
        </>
      )
    } else {
      return (
        <>
          Press <Keyboard>ctrl</Keyboard> + <Keyboard>K</Keyboard> to start →
        </>
      )
    }
  }

  return (
    <button
      onClick={query.toggle}
      className="text-theme-primary transition-all hover:scale-105"
    >
      {getButtonText()}
    </button>
  )
}
