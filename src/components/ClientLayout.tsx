'use client'

import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactNode, useEffect, useState } from 'react'

const WhatsAppWidget = dynamic(
  () => import('@/components/WhatsAppWidget').then(mod => ({ default: mod.WhatsAppWidget })),
  { ssr: false, loading: () => null }
)

export function ClientLayout({ children }: { children: ReactNode }) {
  const [showWidget, setShowWidget] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowWidget(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    const servicesSection = document.querySelector('#services')
    if (servicesSection) {
      observer.observe(servicesSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      {showWidget && <WhatsAppWidget />}
    </ThemeProvider>
  )
}
