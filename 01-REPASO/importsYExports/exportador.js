const saludar = () => {
  return "Hola";
};

export default saludar;

export const nombre = "Guille";
export const apellido = "Montaña";

/* 

TENEMOS DOS FORMAS DE EXPORTAR E IMPORTAR

1) POR DEFAULT
Ejemplo: export default numero;

Exporta UN SOLO dato, para darlo a conocer a los demas archivos.
El export por default puede exportar algo ya declarado por fuera


2) NO, POR DEFAULT. FORMA COMUN

Exporta UNO O MAS DATOS, para darlos a conocer a los demas archivos
El export no default NO puede exportar cuando hay algo declarado fuera


*/

/* 

// FORMA ANTIGUA O UTILIZADA EN BACKEND
module.exports = numero

*/
