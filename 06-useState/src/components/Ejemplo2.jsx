import { useState } from "react";

export default function Ejemplo2() {
  const [count, setCount] = useState(1);

  function sumar() {
    setCount(count + 1);
    //  setCount(count = count + 1)  ESTOOO NOOOO!!!
    //  setCount(count++)            ESTOOO NOOOO!!!
  }

  function restar() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={sumar}>SUMAR</button>
        <button onClick={restar}>RESTAR</button>
      </div>
    </div>
  );
}

/* 

const arr = ['Cosa', 'tal']

const [mama, tanto]

*/

/* 
count++    ------------------ LO MISMO ---------->  count = count + 1
const algo = count++

*/
