import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="w-full bg-blue-300">
      <nav class=" border-gray-200 w-full  p-4 flex-wrap">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" class="flex items-center">
            <img
              src="https://i.pinimg.com/originals/ec/d4/5c/ecd45c33ebd0f8b7df250068d938fe86.png"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-purple-900 dark:text-white">
              GhibliFlix
            </span>
          </a>
          <a href="/search">
            <AiOutlineSearch />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
