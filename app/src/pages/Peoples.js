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
      <div className="p-36">
        <form onSubmit={handleSearch}>
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
        </form>
        <p className="p-4 font-bold">
          Resultados para:{' '}
          <span className="font-bold text-purple-400">{search}</span>
        </p>
        <div className="overflow-x-auto relative rounded">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6 text-blue-500">
                  Name
                </th>
                <th scope="col" className="py-3 px-6 text-blue-500">
                  Gender
                </th>
                <th scope="col" className="py-3 px-6 text-blue-500">
                  Age
                </th>
                <th scope="col" className="py-3 px-6 text-blue-500">
                  eye color
                </th>
              </tr>
            </thead>
            <tbody>
              {people.map((peoples) => {
                if (peoples.name.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <tr className="bg-green-100 border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {peoples.name}
                      </th>
                      <td className="py-4 px-6">{peoples.gender}</td>
                      <td className="py-4 px-6">{peoples.age}</td>
                      <td className="py-4 px-6">{peoples.eye_color}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default People;
