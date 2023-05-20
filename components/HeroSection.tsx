/*
    File Name   : HeroSection.tsx
    Created     : on 16:13 at May 19, 2023
    Description : HeroSection component

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      className="relative"
      style={{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >

      <div className="absolute inset-0">
        <Image 
          src="/images/led-cube.png" 
          alt="Background" 
          fill={true}
          style={{
            opacity: 0.5,
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="text-center relative z-10">
          <div className="p-20 mx-auto">
            <Image 
              src="/icons/logo-shibalab.svg" 
              alt="ShibaLab Logo" 
              width={200} 
              height={200}
            />
          </div>
          <div className="mt-4" style={{ color: 'white' }}>
            <h2 className="text-3xl font-bold">大宮祭 2023</h2>
            <p>The Explosion</p>
            <p>@2308 教室</p>
          </div>
        </div>
      </div>
      <Image 
        className='flex justify-center items-center' 
        src="/icons/arrow-double.svg"
        alt="You can scroll down"
        width={200} 
        height={200}
      />
    </section>
  );
};

export default HeroSection;


