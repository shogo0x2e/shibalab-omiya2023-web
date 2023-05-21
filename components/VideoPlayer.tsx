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

  return <video src={randomVideo} controls />;
}

export default HomePage;
