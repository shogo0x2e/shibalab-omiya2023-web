/*
    File Name   : OverView.tsx
    Created     : on 13:21 at May 20, 2023
    Description : OverView component

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

const OverView = () => {

  return (
    <section 
      className="text-center"
      style={{
        color: 'white'
      }}
    >
      <h3 className="my-10 text-2xl font-bold">
        OVERVIEW
      </h3>
      <h4 className="text-xl font-bold my-2">
        リアルとデジタルの狭間の世界へ
      </h4>
      <p className="my-10" >
        ShibaLab では、「ものづくりで人を感動させ笑顔にする」をミッションとし、
        最新技術を取り入れながらメディアアート・プロジェクションマッピング・ゲーム
        など幅広い創作活動に取り組んでいます。2号館2204教室にて、現実世界とは一味
        違ったデジタルな世界の体験をお楽しみください。
      </p>
    </section>
  );
};

export default OverView;