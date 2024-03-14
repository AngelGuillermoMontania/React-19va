import React, { useState } from "react";
import axios from "axios";

export default function Axios() {
  const [data, setData] = useState([]);

  async function getData() {
    const persona = {
      nombre: "djsgdsa",
      edad: "dsuiaghdafs",
    };
    try {
      await axios("dsagdgafdsa", persona);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={getData}>BUSCAR DATOS</button>
    </div>
  );
}

/* 

// GET
  fetch("https://rickandmortyapi.com/api/character/3")
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      setData(datos);
    });

  try {
    const datos = await fetch("https://rickandmortyapi.com/api/character/3");
    const data = await datos.json()
    setData(data);
  } catch (error) {
    console.log(error);
  }


  axios("https://rickandmortyapi.com/api/character/3")
      .then((datos) => {
        console.log(datos);
        setData(datos.data);
      });

  try {
    const datos = await axios("https://rickandmortyapi.com/api/character/3");
    setData(datos.data);
  } catch (error) {
    console.log(error);
  }




  // POST
const persona = {
  nombre: "djsgdsa",
  edad: "dsuiaghdafs"
}
try {
  await fetch("dagdfsahdfas", {
    method: "POST",
    body: persona,
  })
} catch (error) {
  console.log(error);
}


const persona = {
  nombre: "djsgdsa",
  edad: "dsuiaghdafs"
}
try {
  await axios.post("dsagdgafdsa", persona)
} catch (error) {
  console.log(error);
}

  
*/
