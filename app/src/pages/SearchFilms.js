import React from 'react';
import CardSearch from '../components/CardsSearch';
import Header from '../components/Header';

const SearchFilms = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-wrap gap-6 p-6 justify-center">
          <CardSearch url="films" />
        </div>
      </div>
    </>
  );
};

export default SearchFilms;
