/*
    File Name   : Header.tsx
    Created     : on 16:00 at May 19, 2023
    Description : Header component

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

import Image from 'next/image';

const Header = () => {

  return (
    <header className="flex justify-between items-center p-4">
      <div className="left-menu">
        <Image src="/icons/util-menu.svg" alt="Humbuger Menu" width={24} height={24} />
      </div>
      <div className="right-menu">
        <Image src="/icons/util-language.svg" alt="Language Menu" width={24} height={24} />
      </div>
    </header>
  );
};

export default Header;

