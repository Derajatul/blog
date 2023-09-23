import './globals.css'
import type { Metadata } from 'next'
import { Patrick_Hand } from 'next/font/google'

const patrickHand = Patrick_Hand({weight: "400",subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Dera',
  description: 'Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={patrickHand.className}>{children}</body>
    </html>
  )
}
