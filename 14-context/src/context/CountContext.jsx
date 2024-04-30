import { createContext, useEffect, useState } from "react";

export const CountContext = createContext(); // Creamos el contexto

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem("Count")));
  }, []);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const data = {
    count, // count: count
    sumar, // sumar: sumar
    restar, // restar: restar
    reset, // reset: reset
  };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};

export default CountContextProvider;
