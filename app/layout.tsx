
import Navbar from './components/Navbar'
import './globals.css'
import { Metadata } from 'next'

type Props = {
  children: React.ReactNode
}

export const metadata:Metadata = {
  title: 'Andrii Blog',
  description: 'Created by Andrii Okhrimenko',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar />
        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
