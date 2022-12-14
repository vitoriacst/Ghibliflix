import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gray-800" data-testid="component-header">
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
              class="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white"
              data-testid="component-header-title"
            >
              GhibliFlix
            </span>
          </a>
          <div className="flex gap-12 text-white">
            <a
              href="/peoples"
              data-testid="header-route-people"
              className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
            >
              Peoples
            </a>
            <a href="/locations" data-testid="header-route-locations">
              Locations
            </a>
            <a href="/search" data-testid="header-route-search">
              Filmes
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
