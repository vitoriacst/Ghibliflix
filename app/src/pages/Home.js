import React from 'react';
import CardsMovies from '../components/CardsMovies';
import Header from '../components/Header';
import OldMovies from '../components/OldFilms';

const Home = () => {
  return (
    <div>
      <Header />
      <figure id="container">
        <img
          src="https://animes.olanerd.com/wp-content/uploads/2022/06/1655737548_Como-os-melhores-filmes-do-Studio-Ghibli-atingem-as-emocoes.jpg"
          className="w-full brightness-50"
        />
      </figure>
      <CardsMovies />
      <img
        src="https://veja.abril.com.br/wp-content/uploads/2020/01/sen-to-chihiro-no-kamikakushi.jpg"
        alt=""
        srcset=""
        className="w-full brightness-50 h-1/2"
      />
      <OldMovies />
    </div>
  );
};

export default Home;
