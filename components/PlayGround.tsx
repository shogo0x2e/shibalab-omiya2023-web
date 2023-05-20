/*
    File Name   : PlayGround.tsx
    Created     : on 12:16 at May 20, 2023
    Description : テスト用のコンポーネント

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

import Image from 'next/image';

const PlayGround = () => {
  return (
    <section>
      <div 
        className="relative flex flex-col items-center justify-center"
        style={{
          height: 'calc(100vh - 64px)'
        }}
      >
        <Image
          src="/images/led-cube.png"
          alt="Background"
          fill={true}
          className="absolute inset-0 opacity-50"
          style={{
            opacity: 0.5,
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="text-center relative z-10">
          <div className="p-20 mx-auto">
            <Image
              src="/icons/logo-shibalab.svg"
              alt="ShibaLab Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-4 text-white">
            <h2 className="text-3xl font-bold">大宮祭 2023</h2>
            <p>The Explosion</p>
            <p>@2308 教室</p>
          </div>
        </div>
      </div>
        <div className="flex justify-center items-center mt-4 z-10">
          <Image
            src="/icons/arrow-double.svg"
            alt="You can scroll down"
            width={200}
            height={200}
          />
        </div>
      <div>

      </div>
    </section>
  );
};

export default PlayGround;

