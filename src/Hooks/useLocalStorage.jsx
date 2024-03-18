import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorage";

const useLocalStorage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getFromLocalStorage);
  }, []);

  return { data };
};

export default useLocalStorage;
