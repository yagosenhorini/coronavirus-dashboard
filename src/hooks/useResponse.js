import { useState, useEffect } from "react";
import getData from "../services";

function useCoronavirusApi() {
  const [useResponse, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async function getResponse() {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await getData();
        setResponse(response);
      } catch (err) {
        setIsError(true);
        throw new Error("Error to get response: ", err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return { useResponse, isLoading, isError };
}

export default useCoronavirusApi;
