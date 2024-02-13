import { useEffect, useState } from 'react';

// custom hooks
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          setError('Failed to fetch');
        } else {
          const result = await res.json();
          setData(result.data);
          setLoading(false);
        }

        //if error
      } catch (error) {
        setError(error.message);
        setLoading(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
