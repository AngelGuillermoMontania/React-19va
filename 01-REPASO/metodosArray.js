const arr = ["Coco", "Lorena", "Laura"];

const nombresCompleto = arr.map((nombre) => `${nombre} estudiante`);

console.log(nombresCompleto); // ["Coco estudiante", "Lorena estudiante", "Laura estudiante"]

const numeros = [50, 24, 98, 56, 24, 35, 87];

const menorOIgual50 = numeros.filter((numero) => numero >= 50);

console.log(menorOIgual50); // [50,98,56,87]
