import { useState, useEffect } from "react";

export default function useApi(url, fetchOptions) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url, fetchOptions);
        const json = await fetchedData.json();
        setData(json);
        if (fetchedData.status >= 200 && fetchedData.status < 300) {
          setIsSuccess(true);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError, isSuccess };
}
