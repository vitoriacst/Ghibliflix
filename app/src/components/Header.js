import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="w-full bg-blue-300" data-testid="component-header">
      <nav class=" border-gray-200 w-full  p-4 flex-wrap">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img
              src="https://i.pinimg.com/originals/ec/d4/5c/ecd45c33ebd0f8b7df250068d938fe86.png"
              class="mr-3 h-6 sm:h-9"
              alt="Logo"
              data-testid="header-image"
            />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap text-purple-900 dark:text-white"
              data-testid="component-header-title"
            >
              GhibliFlix
            </span>
          </a>
          <div className="flex gap-12">
            <a href="/peoples" data-testid="header-route-people">
              Peoples
            </a>
            <a href="/locations" data-testid="header-route-locations">
              Locations
            </a>
            <a href="/search" data-testid="header-route-search">
              <AiOutlineSearch className="text-xl" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
