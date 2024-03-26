/* TypeScript se ejecuta en tiempo de compilacion */
/* JavaScript se ejecuta en tiempo de ejecucion */

let nombre = "Angel";
let age: number = 35;
let nada: null = null;
let esMayor: boolean = false;
let prueba: undefined = undefined;

/* Si la funcion no retorna nada, el tipo de dato es void */
function Saludar(nombre: string, edad: number): string {
  return `Hola, mi nombre es ${nombre} y mi edad es ${edad}`;
}

Saludar("Angel", 31);

let numeros: (string | number)[] = [2, 5, 6, 7, 8, 9, "Hola"];

interface Persona {
  nombre: string;
  edad?: number;
  vive: boolean;
}

const Guille: Persona = {
  nombre: "Angel",
  edad: 31,
  vive: true,
};

const Ada: Persona = {
  nombre: "Ada",
  vive: false,
};

const conjuntoPersonas: Persona[] = [
  {
    nombre: "Rocio",
    edad: 32,
    vive: true,
  },
  Guille,
  Ada,
];

/* :string    <string> */

/* File */
/* Date */
/* Decimal */

let cualquierCosa: any = 35;
cualquierCosa = "hola";
cualquierCosa = { nombre: "ldshadas" };
cualquierCosa = [];
