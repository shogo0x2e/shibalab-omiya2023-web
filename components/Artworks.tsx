/*
    File Name   : OverView.tsx
    Created     : on 13:21 at May 20, 2023
    Description : OverView component

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

import artworksData from '../data/artworks.json';
import Image from 'next/image';

const Artworks = () => {

  return (
    <section>
      <h3 className="my-10 text-2xl font-bold text-center">
        ARTWORKS
      </h3>

      <div className="flex flex-wrap justify-center">
      {artworksData.map((artwork) => (
        <div 
          key={artwork.id} 
          className="max-w-md mx-4 my-4 bg-[#101010] rounded-lg shadow-lg"
          style={{
            width: '400px'
          }}
        >
          <Image 
            src={artwork.image} 
            alt="Artwork" 
            height={200}
            width={200}
            className="w-full h-64 object-cover rounded-t-lg" 
          />
          <div className="p-4">
            
            <h3 className="text-xl font-bold mb-2">
              {artwork.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {artwork.description}
            </p>
            <div className="flex justify-center">
              <button className="bg-transparent border border-white text-white my-2 py-2 px-4 rounded-full hover:bg-white hover:text-[#101010] transition-colors duration-300">マップで見る</button>
            </div>

          </div>
        </div>
      ))}
    </div>

    </section>

  );
};

export default Artworks;