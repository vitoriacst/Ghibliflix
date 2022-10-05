import { useEffect, useState } from 'react';

const UseApi = (url) => {
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setData(data);
      });
  }, []);

  return { movies, data };
};

export default UseApi;
