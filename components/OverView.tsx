/*
    File Name   : OverView.tsx
    Created     : on 13:21 at May 20, 2023
    Description : OverView component

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

import { useEffect, useState } from "react";


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

const OverView = () => {
  
  const [randomVideo, setRandomVideo] = useState('');


  useEffect(() => {
    const video = getRandomVideo();
    setRandomVideo(video);

  }, []); // Only depends on the new state

  return (
    
    <section 
      className="text-center"
    >
      <h3 className="my-10 text-2xl font-bold">
        OVERVIEW
      </h3>

      <video className="bg-video bg-black" src={randomVideo} autoPlay loop muted playsInline>

      </video>

      {/* 画面上のコンテンツ */}
      <div className="header-title">
        <h4 className="text-xl font-bold my-2">
          リアルとデジタルの狭間の世界へ
        </h4>
        <p className="my-10" >
          ShibaLab では、「ものづくりで人を感動させ笑顔にする」をミッションとし、
          最新技術を取り入れながらメディアアート・プロジェクションマッピング・ゲーム
          など幅広い創作活動に取り組んでいます。2号館2204教室にて、現実世界とは一味
          違ったデジタルな世界の体験をお楽しみください。
        </p>
      </div>
    </section>
  );
};

export default OverView;