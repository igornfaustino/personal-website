'use client'
import { useEffect, useState } from 'react'
import Keyboard from './Keyboard'

export default function ShortcutButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    const classes = 'transition-all text-theme-primary hover:scale-105'
    if (isMobile) {
      return <button className={classes}>Tap to start →</button>
    } else if (isMac) {
      return (
        <button className={classes}>
          Press <Keyboard>⌘</Keyboard> + <Keyboard>K</Keyboard> to start →
        </button>
      )
    } else {
      return (
        <button className={classes}>
          Press <Keyboard>ctrl</Keyboard> + <Keyboard>K</Keyboard> to start →
        </button>
      )
    }
  }

  return <div />
}
