import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url: string) => {
  const [response, setResponse] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchApi();
  }, [url]);

  return { response, loading, error };
};

export default useAxios;
