/*
    File Name   : OverView.tsx
    Created     : on 13:21 at May 20, 2023
    Description : OverView component

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

import Image from 'next/image';

const FloorMap = () => {

  return (
    <section className='text-center'>

      <h3 className="my-10 text-2xl font-bold">
        MAP
      </h3>

      <div className='flex justify-center items-center'>
        <Image 
          src="/images/map-omiyafes2023.png" 
          alt='Map for Omiya-Fes' 
          width={800}
          height={800}
        />
      </div>

    </section>
  );
};

export default FloorMap;