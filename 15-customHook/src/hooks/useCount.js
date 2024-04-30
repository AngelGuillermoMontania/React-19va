import { useState } from "react";

export default function useCount() {
  const [count, setCount] = useState(0);

  function restar() {
    setCount(count - 1);
  }

  function sumar() {
    setCount(count + 1);
  }

  return {
    count,
    sumar,
    restar,
  };
}

// Home
// const { count } = useCount()   // 0
