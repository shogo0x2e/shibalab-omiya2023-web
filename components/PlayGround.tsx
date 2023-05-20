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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <Image
          src="/icons/logo-shibalab.svg"
          alt="ShibaLab Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
        <div className="mt-4" style={{ color: 'white' }}>
          <h2 className="text-3xl font-bold">大宮祭 2023</h2>
          <p>The Explosion</p>
          <p>@2308 教室</p>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;

