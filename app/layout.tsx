import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: '티앤지손해사정 | T&G 손해사정 그룹 공식 홈페이지',
  description: '대한민국 손해사정의 기준을 세우는 No1. 손해사정 파트너 - T&G 손해사정 그룹',
  generator: 'v0.app',
  keywords: ["티앤지손해사정", "손해사정", "TNG", "티앤지", "티앤지손해사정그룹", "T&G 손해사정" ],
  icons: {
    icon: [
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
