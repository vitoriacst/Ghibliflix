import React, { useState } from 'react';
import Header from '../components/Header';
import UseApi from '../hooks/UseApi';

const People = () => {
  const { people } = UseApi('https://ghibliapi.herokuapp.com/people');
  console.table(people);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (!search) return;

    setSearch('');
  };

  const handleChange = () => {
    people.filter((peoples) => {
      return peoples.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  return (
    <>
      <Header />
      <div className="">
        <form onSubmit={handleSearch} className="p-4">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              data-testid="people-input"
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Procure por um Personagem"
              required=""
              name="search"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              onClick={handleChange}
            >
              Procurar
            </button>
          </div>
          {/* <select className="select select-info w-full max-w-xs">
            <option disabled selected>
              Filtrar por
            </option>
            <option>Menor idade</option>
            <option>Maior idade</option>
            <option>Male</option>
            <option>Female</option>
          </select> */}
        </form>
        <p className="p-4 font-bold">
          Resultados para:{' '}
          <span className="font-bold text-purple-400">{search}</span>
        </p>
        <div className="flex flex-wrap gap-6 p-6 justify-center">
          {people.map((peoples) => {
            if (peoples.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div
                  className="animate- max-w-sm rounded overflow-hidden shadow-lg bg-white"
                  data-testid="people-card"
                >
                  <img
                    className="w-full"
                    src="https://i.pinimg.com/236x/2b/00/bf/2b00bf816592eb670a422d7b80317b3e.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div
                      className="font-bold text-xl mb-2"
                      data-testid="people-card-title"
                    >
                      {peoples.name}
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span
                      className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-gender"
                    >
                      Gender: {peoples.gender}
                    </span>
                    <span
                      className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-age"
                    >
                      Age: {peoples.age}
                    </span>
                    <span
                      className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-eyes"
                    >
                      Eyes colors: {peoples.eye_color}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default People;
