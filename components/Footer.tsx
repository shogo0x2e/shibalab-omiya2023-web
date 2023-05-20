/*
    File Name   : OverView.tsx
    Created     : on 13:21 at May 20, 2023
    Description : OverView component

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

import Image from 'next/image';

const Footer = () => {

  return (
    
    <footer className=" text-white">
      <div className="flex justify-center items-center mb-2 py-4">

        <Image 
            src="/icons/logo-shibalab.svg"
            alt="ShibaLab Logo" 
            width={100} 
            height={100} 
            className="mr-2" 
        />
        <a href='https://shibalab.com/'>
          <span>公式HP</span> 
        </a>
        <Image 
          src="/icons/arrow-nw.svg"
          alt="ShibaLab Logo" 
          width={24} 
          height={24} 
          className="mr-2" 
        />
      </div>
      <div className="flex justify-center my-6 mb-10">
        <a href="https://www.instagram.com/shiba_lab/">
          <Image 
            src="/icons/logo-instagram.svg" 
            alt="Instagram" 
            width={36} 
            height={36} 
            className="mx-6" 
          />
        </a>
        <a href='https://twitter.com/Shiba_Lab'>
          <Image 
            src="/icons/logo-twitter.svg" 
            alt="Twitter" 
            width={36} 
            height={36} 
            className="mx-6" 
          />
        </a>
        <a href="https://www.youtube.com/@shibalab6221">
          <Image 
            src="/icons/logo-youtube.svg" 
            alt="YouTube" 
            width={36} 
            height={36} 
            className="mx-6" 
          />
        </a>
      </div>
      <p className='bg-gray-900 text-center py-6'>
        © 2023 ShibaLab All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;