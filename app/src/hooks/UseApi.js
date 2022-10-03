import  { useEffect, useState } from 'react'

const UseApi = (url) => {
  const[movies, setMovies] = useState([])
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return { movies };
}

export default UseApi;
