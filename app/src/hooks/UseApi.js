import { useEffect, useState } from 'react';

const UseApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return { data };
};

export default UseApi;
