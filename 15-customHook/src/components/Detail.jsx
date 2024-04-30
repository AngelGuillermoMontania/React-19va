import { useState } from "react";
import { Link } from "react-router-dom";
import useCount from "../hooks/useCount";

export default function Detail() {
  const { count, sumar, restar } = useCount();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={restar}>Restar 1 </button>
        <button onClick={sumar}>Sumar 1</button>
      </div>
      <Link to="/">Ir al Home</Link>
    </div>
  );
}

/* 

function devolver5 {
  return 5
}

let num1 = devolver5()
num1 = num1 + 5
console.log(num1)  // 10
let num2 = devolver5()
console.log(num2)   //5

*/
