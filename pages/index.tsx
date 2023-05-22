import HeroSection from '@/components/HeroSection'
import OverView from '@/components/OverView'
import FloorMap from '@/components/FloorMap'
import Artworks from '@/components/Artworks'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { useState, useEffect } from 'react'

const options = [
  '/movies/bubble-center.mp4', 
  '/movies/bubble-float.mp4', 
  '/movies/petal.mp4', 
  '/movies/star.mp4', 
  '/movies/twirl-down.mp4', 
];

function getRandomVideo() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


export default function Home() {
  
  const [randomVideo, setRandomVideo] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = getRandomVideo();
    setRandomVideo(video);

    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);

  }, []); // Only depends on the new state

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
        <meta http-equiv="Cache-Control" content="no-store" />
      </Head> 
      <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: isVisible ? 'block' : 'none' 
      }}
      >
        
        <video 
          autoPlay muted loop playsInline
          className="h-screen video-element"
          style={{
            zIndex: 100,
          }}
          src={randomVideo}
        />
      </div>

      <main>
    
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
