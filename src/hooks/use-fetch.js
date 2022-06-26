import { useEffect, useState } from "react";

export const useFetch = (config) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let response = await fetch(config);
        let { products } = await response.json();
        setResponse(products);
        setLoading(false);
      } catch (error) {
        setLoading(error);
        setError(error);
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [response, loading, error];
};
