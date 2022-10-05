import React from 'react';
import CardSearch from '../components/CardsSearch';
import Header from '../components/Header';

const People = () => {
  return (
    <>
      <Header />
      <CardSearch url="people" />
    </>
  );
};

export default People;
