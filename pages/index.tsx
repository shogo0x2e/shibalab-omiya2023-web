import HeroSection from '@/components/HeroSection'
import Header from '../components/Header'
import OverView from '@/components/OverView'
import FloorMap from '@/components/FloorMap'
import Artworks from '@/components/Artworks'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      
      <div style={{
        height: '180px'
      }} />

      <div className='flex justify-center flex-col items-center'>
        <div className='w-9/12'>
          <OverView />
        </div>

        <div style={{
          height: '120px'
        }} />

        <div className='w-9/12'>
          <FloorMap />
        </div>

        <div style={{
          height: '120px'
        }} />

        <div className='w-9/12'>
          <Artworks />
        </div>

        <div style={{
          height: '100px'
        }} />
      </div>
      <Footer />
    </main>
  )
}
