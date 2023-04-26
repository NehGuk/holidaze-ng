import { useState, useEffect } from "react";

export default function useApi(url, fetchMethod) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function makeAPICall() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url, fetchMethod);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    makeAPICall();
  }, [url]);
  return { data, isLoading, isError };
}
