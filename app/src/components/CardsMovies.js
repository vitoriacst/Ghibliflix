import React from 'react';
import UseApi from '../hooks/UseApi';

const CardMovies = () => {
  const { movies } = UseApi('https://ghibliapi.herokuapp.com/films/');
  return (
    <>
      <h1 className="p-4 font-bold">Filmes mais Famosos:</h1>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {movies.map((movie, index) => {
          if (movie.rt_score > 96) {
            return (
              <div
                className="animate- max-w-sm rounded overflow-hidden shadow-lg bg-white"
                data-testid="card-movie"
              >
                <img
                  className="w-full"
                  src={movie.image}
                  alt="Sunset in the mountains"
                  data-testid="card-image"
                />
                <div className="px-6 py-4">
                  <div
                    className="font-bold text-xl mb-2"
                    data-testid="card-title"
                  >
                    {movie.title}
                  </div>
                  <p
                    className="text-gray-700 text-base"
                    data-testid="card-description"
                  >
                    {movie.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span
                    className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    data-testid="card-director"
                  >
                    {movie.director}
                  </span>
                  <span
                    className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    data-testid="card-date"
                  >
                    {movie.release_date}
                  </span>
                  <span
                    className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    data-testid="card-producer"
                  >
                    {movie.producer}
                  </span>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            );
          }
          return;
        })}
      </div>
    </>
  );
};

export default CardMovies;
