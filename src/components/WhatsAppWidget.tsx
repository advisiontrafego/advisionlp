'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function WhatsAppWidget() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(resolvedTheme === 'dark')
  }, [resolvedTheme])

  if (!mounted) return null

  const avatarSrc = isDark ? '/logos/logo-avatar-dark.svg' : '/logos/logo-avatar-light.svg'

  return (
    <FloatingWhatsApp
      phoneNumber="553592377121"
      accountName="Advision"
      avatar={avatarSrc}
      statusMessage="Online"
      chatMessage="Olá, Pronto para escalar suas vendas? 🚀"
      placeholder="Digite sua mensagem..."
      messageDelay={1}
      darkMode={isDark}
      notification
      notificationDelay={3}
      notificationLoop={2}
      buttonClassName="whatsapp-pulse"
      buttonStyle={{
        bottom: '2rem',
        right: '2rem',
      }}
      chatboxStyle={{
        bottom: '7rem',
        right: '2rem',
      }}
    />
  )
}
