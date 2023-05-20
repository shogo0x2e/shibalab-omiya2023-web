import HeroSection from '@/components/HeroSection'
import Header from '../components/Header'
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
    </main>
  )
}
