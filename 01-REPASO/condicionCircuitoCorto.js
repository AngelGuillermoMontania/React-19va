const saludo = false || false;
console.log(saludo); //  undefined
/* Lee de izquierda a derecha y va a tomar el primer valor que de true
si los dos evaluan en false, no hace nada
*/

const despedida = false && "Chau";
console.log(despedida); // false
/* Evalua primero el de la izquierda y luego el de la derecha,
Si los dos evaluan true, va a quedar o guardar el ultimo evaluado
Si uno de los evalua false, no va a guardar nada
*/

const saludo2 = "Hola" && "Chau" && "Hasta Luego";
console.log(saludo2); // "Hasta Luego"

const numero = 0;

function ejemplo() {
  // if(numero == false) {
  //   return 0
  // } else {
  //   return 150
  // }
  // return numero && 150
}
