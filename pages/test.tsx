import { useEffect, useState } from 'react';

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

function HomePage() {
  const [randomVideo, setRandomVideo] = useState('');

  useEffect(() => {
    const video = getRandomVideo();
    setRandomVideo(video);
  }, []);

  return (
    <div 
    style={{
      backgroundColor: 'red',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}
    >
    
      <video 
      autoPlay muted loop playsInline
      className="h-screen video-element"
      src={randomVideo}
      />
    </div>
  );
}

export default HomePage;
