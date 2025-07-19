import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://typebase.dev'),
  title: '株式会社Typebase',
  description: '株式会社TypebaseはWebサービスの開発支援を行う会社です。',
  openGraph: {
    url: 'https://typebase.dev',
    type: 'website',
    title: '株式会社Typebase',
    description: '株式会社TypebaseはWebサービスの開発支援を行う会社です。',
    siteName: '株式会社Typebase',
    images: '/images/OGP.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@typebase_inc',
  },
  other: {
    'msapplication-TileColor': '#1c7ed6',
    'theme-color': '#ffffff',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1c7ed6' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
