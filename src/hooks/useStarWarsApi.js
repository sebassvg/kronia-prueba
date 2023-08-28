import { useState, useEffect } from 'react';
import axios from 'axios';

const useStarWarsApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://swapi.dev/api/${endpoint}`;

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useStarWarsApi;

