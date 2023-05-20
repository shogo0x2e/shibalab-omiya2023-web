import HeroSection from '@/components/HeroSection'
import Header from '../components/Header'
import OverView from '@/components/OverView'


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
          height: '180px'
        }} />

        <div className='w-9/12'>
          <OverView />
        </div>
      </div>
    </main>
  )
}
