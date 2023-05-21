import HeroSection from '@/components/HeroSection'
import Header from '../components/Header'
import OverView from '@/components/OverView'
import FloorMap from '@/components/FloorMap'
import Artworks from '@/components/Artworks'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { LanguageServiceMode } from 'typescript'


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta lang='ja' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="ShibaLab 大宮祭 2023 展示企画" />
        <meta property="og:description" content="芝浦工業大学のデジタルアートサークル、ShibaLab がお送りする大宮祭 2023 の教室企画です！" />
        <meta property="og:image" content="/images/meta-preview.png" />
        <meta property="og:url" content="https://omiyafes-2023.shibalab.com/" />
      </Head> <main>
      {/* <Header /> */}
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
    </>
   
  )
}
