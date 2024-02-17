const persona = {
  nombre: "Ada",
  apellido: "Lovelace",
  edad: 208,
  ocupacion: "Programadora",
};

// const { ocupacion, edad, nombre, apellido } = persona;

// console.log(nombre); // Ada
// console.log(ocupacion); // Programadora
// console.log(apellido); // Lovelace

/* En la desestructuracion de objeto, no importa la posicion si importa el nombre */

const nombres = ["Vale", "Florencia", "Lorena"];

const [pepeHonguito, , cosacosa] = nombres;

console.log(pepeHonguito); // Vale
console.log(cosacosa); // Florencia
console.log(Sofia); // Lorena

function saludar({ nombre, apellido }, ciudad) {
  return `Hola ${nombre} ${apellido}, soy de ${ciudad}`;
}

saludar(persona, "San Juan");
