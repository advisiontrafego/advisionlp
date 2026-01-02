'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const WhatsAppWidget = dynamic(
  () => import('./WhatsAppWidget').then(mod => ({ default: mod.WhatsAppWidget })),
  { 
    ssr: false,
    loading: () => null
  }
)

export function LazyWhatsAppWidget() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShouldLoad(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    const handleInteraction = () => {
      setShouldLoad(true)
      window.removeEventListener('mousemove', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
    }

    const timer = setTimeout(() => setShouldLoad(true), 3000)

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleInteraction, { passive: true })
    window.addEventListener('touchstart', handleInteraction, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
    }
  }, [])

  if (!shouldLoad) return null

  return <WhatsAppWidget />
}
