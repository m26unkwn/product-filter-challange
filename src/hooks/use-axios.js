import { useEffect, useState } from "react";

export const useAxios = (config) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let products = await axios(config);
        setResponse(products);
        setLoading(false);
      } catch (error) {
        setLoading(error);
        setError(error);
        console.log(error);
      }
    })();
  }, []);

  return [response, loading, error];
};
