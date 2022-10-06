import React from 'react';
import CardsMovies from '../components/CardsMovies';
import DemoCarousel from '../components/Carrosel';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <DemoCarousel />
      <CardsMovies />
      <Footer />
    </div>
  );
};

export default Home;
