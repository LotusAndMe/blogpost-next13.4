import MyProfilePic from './components/MyProfilePic'
import Navbar from './components/Navbar'
import './globals.css'

type Props = {
  children: React.ReactNode
}

export const metadata = {
  title: 'Andrii Blog',
  description: 'Created by Andrii Okhrimenko',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
