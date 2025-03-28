import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'P2P Lending Platform',
  description: 'Peer-to-peer loan app built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
