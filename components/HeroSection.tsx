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
        height: 'calc(100vh - 64px)'
      }}
    >

      <div className="absolute inset-0">
        <Image 
          src="/images/led-cube.png" 
          alt="Background" 
          fill={true}
          style={{
            opacity: '0.5',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="text-center">
          <Image 
            src="/icons/logo-shibalab.svg" 
            alt="ShibaLab Logo" 
            width={200} 
            height={200}
            style= {{ 
              position: 'relative', 
              top: '100px',
              left: '0',
              zIndex: 1 
            }}
          />
        </div>
      </div>
      
    </section>

  );
//   <section className="flex justify-center items-center h-screen bg-cover bg-center">
//   <div className="text-center">
//     <Image src="/images/led-cube.png" alt="Background" width={800} height={500} />
//     <Image src="/icons/logo-shibalab.svg" alt="ShibaLab Logo" width={200} height={200} />
//   </div>
// </section>
};

export default HeroSection;

