import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samnoeun Run - Web Developer",
  description: "Personal portfolio of Samnoeun Run, a passionate web developer from Cambodia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Samnoeun Run. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
