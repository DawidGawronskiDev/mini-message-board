import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T>(link: string, errorMsg: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<T>(link);
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(errorMsg);
        return;
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setIsLoading(false);
    };
  }, [link, errorMsg]);

  return { data, isLoading, error };
};

export default useFetch;
