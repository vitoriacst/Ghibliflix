import { useEffect, useState } from 'react';

const UseApi = (url) => {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setPeople(data);
        setLocation(data);
      });
  }, []);

  return { movies, people, location };
};

export default UseApi;
