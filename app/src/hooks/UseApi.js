import { useEffect, useState } from 'react';

const UseApi = (url) => {
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  return { movies, data, loading };
};

export default UseApi;
