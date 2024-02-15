import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero/Hero'
import CoreValues from '@/components/Values/Values'
import Abouts from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import AppFooter from '@/components/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreValues />
      <Abouts />
      <Projects />
      <AppFooter />
    </div>
  )
}
