// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payload CMS',
  description: 'Payload CMS with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}