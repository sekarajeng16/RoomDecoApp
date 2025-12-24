import { League_Spartan } from 'next/font/google'
import './globals.css'
import  Navbar  from './components/Navbar'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: "Room Homepage",
  description: "Modern furniture for your home",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={leagueSpartan.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
