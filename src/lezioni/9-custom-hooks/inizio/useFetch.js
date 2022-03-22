import react, { useState, useEffect } from "react";
import Axios from "axios";



const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await Axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return {data, isLoading}
};

export default useFetch;
