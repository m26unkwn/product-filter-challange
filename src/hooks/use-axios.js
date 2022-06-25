import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (config) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let response = await axios(config);
        let { products } = await response.json();
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
