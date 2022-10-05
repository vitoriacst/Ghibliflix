import { useState } from 'react';
import UseApi from '../../hooks/UseApi';

const RenderCard = (url) => {
  const baseUrl = `https://ghibliapi.herokuapp.com/${url}`;
  const [search, setSearch] = useState('');
  const { data } = UseApi(baseUrl);
  const handleSearch = (event) => {
    event.preventDefault();
    if (!search) return;
    setSearch('');
  };

  const handleChange = () => {
    data.filter((data) => {
      return data.name.toLowerCase().includes(search.toLowerCase());
    });
  };
  if (url === 'people') {
    return (
      <>
        <div>
          <form className="p-4" onSubmit={handleSearch}>
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
                data-testid="CardSearch-input"
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Procure"
                required=""
                name="search"
                onChange={(event) => setSearch(event.target.value)}
                value={search}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleChange}
              >
                Procurar
              </button>
            </div>
          </form>
          <h1 className="p-4 font-thin text-white text-2xl">
            Resultados para:{' '}
            <span className="font-bold text-blue-400">{search}</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-6 p-6 justify-center">
          {data.map((info, index) => {
            if (info.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div
                  key={index}
                  className="animate- max-w-sm rounded overflow-hidden shadow-lg bg-white"
                  data-testid="people-card"
                >
                  <img
                    className="w-full brightness-50"
                    src="https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/parque_do_studio_ghibli_teaser__8qsaclo00.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div
                      className="font-bold text-xl mb-2"
                      data-testid="people-card-title"
                    >
                      {info.name}
                    </div>
                  </div>

                  <div className="px-6 pt-4 pb-2">
                    <span
                      className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-gender"
                    >
                      Gender: {info.gender}
                    </span>
                    <span
                      className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-age"
                    >
                      Age: {info.age}
                    </span>
                    <span
                      className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-eyes"
                    >
                      Eyes colors: {info.eye_color}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
  if (url === 'locations') {
    return (
      <>
        <div>
          <form className="p-4" onSubmit={handleSearch}>
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
                data-testid="CardSearch-input"
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Procure"
                required=""
                name="search"
                onChange={(event) => setSearch(event.target.value)}
                value={search}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleChange}
              >
                Procurar
              </button>
            </div>
          </form>
          <h1 className="p-4 font-thin text-white text-2xl">
            Resultados para:{' '}
            <span className="font-bold text-blue-400">{search}</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-6 p-6 justify-center">
          {data.map((info, index) => {
            if (info.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div
                  key={index}
                  className="animate- max-w-sm rounded overflow-hidden shadow-lg bg-white"
                  data-testid="people-card"
                >
                  <img
                    className="w-full brightness-50"
                    src="https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/parque_do_studio_ghibli_teaser__8qsaclo00.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div
                      className="font-bold text-xl mb-2"
                      data-testid="people-card-title"
                    >
                      {info.name}
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span
                      className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-gender"
                    >
                      Residents: {info.residents.length}
                    </span>
                    <span
                      className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-age"
                    >
                      Surface Water: {info.surface_water}
                    </span>
                    <span
                      className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-eyes"
                    >
                      Terrain: {info.terrain}
                    </span>
                    <span
                      className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      data-testid="people-card-badge-eyes"
                    >
                      Climate: {info.climate}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
};

export default RenderCard;
