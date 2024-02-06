/* SINCRONISMO */

// function primero() {
//   return 2 + segundo();
// }

// function segundo() {
//   return 5 + tercero();
// }

// function tercero() {
//   return 4;
// }

// primero()

/* ASYNCRONISMO */
// setTimeout(() => {
//   console.log("EJECUTE SETTIME");
// }, 5000); // 1 se ejecuta el setTime            // va a mostrar el console de EJECUTE SETTIME

// console.log("HOLA"); // 2 se muestra el console.log

/* PROMESAS */

// Codigo asincrono en JS es setTime, Eventos del DOM, promesas
// .then.catch/asyncAwait

/* 
•	Pendiente (pending): El estado inicial de un promise.
•	Completada (fullfilled): Representa que se completó de manera exitosa.
•	Rechazada (rejected): La operación terminó, pero de manera fallida.
 */

let bool = false;
const promesa = new Promise((response, reject) => {
  setTimeout(() => {
    if (bool) {
      response("PROMESA RESUELTA");
    } else {
      reject("ERROR");
    }
  }, 5000);
})
  .then((data) => console.log(data))
  .catch((err) => console.log("NO QUEDA DE HUMITA"))
  .finally(() => console.log("FINALLY"));

function saludar() {
  console.log("Hola");
}

saludar();

/* CASO FELIZ - THENCATCH */
// let algo = [];
// fetch("https://rickandmortyapi.com/api/character/3")
//   .then((response) => response.json())
//   .then((data) => (algo = data))
//   .catch((error) => console.log("ERROR DE LA API"));

/* CALLBACK HELL -- POR FAVOR NUNCA */
// fetch("LO QUE SEA")
//   .then((response) => response.json())
//     .then((data) => fetch(data.url))
//       .then((cosa) => cosa.json())
//         .then(datos => fetch(datos.))

/* CASO FELIZ ASYNC-AWAIT */
// const traerPersonaje = async () => {
//   try {
//     const response = await fetch("https://rickandmortyapi.com/api/character/3")
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log("NO QUEDA DE HUMITA")
//   }
// };

/* CALLBACKHELL --- ASYNCAWAIT */
// const traerPersonaje = async () => {
//   try {
//     const response = await fetch("https://rickandmortyapi.com/api/character/3");
//     const data = await response.json();
//     const cosa = await fetch(data.url);
//     return data;
//   } catch (error) {
//     console.log("NO QUEDA DE HUMITA");
//   }
// };
