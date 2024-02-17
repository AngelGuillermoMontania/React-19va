const arr = [5, 10, 6, 9, 12, 7];
const arr2 = ["Ada", "Lovelace"];

const copia = [...arr];

console.log(copia); // [5, 10, 6, 9, 12, 7, "Guille", "Ada", "Lovelace"]

// filter
// console.log(arr)   ---  [5, 10, 6, 9, 12, 7]

const persona = {
  nombre: "Ada",
  apellido: "Lovelace",
  edad: 208,
  ocupacion: "Programadora",
};

const copiaPersona = { ...persona, ...arr };
