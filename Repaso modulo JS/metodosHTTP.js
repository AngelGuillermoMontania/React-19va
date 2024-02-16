/* 
GET    ---- Ver registro/s
POST   ---- Crea/Agrega un registro
PUT    ---- Actualiza un registro, si el dato no existe lo crea.
DELETE ---- Elimina registro/s
*/

// const verTodasLasTareas = async () => {
//   try {
//     const response = await fetch(
//       "https://65c180d7dc74300bce8dac91.mockapi.io/api/task"
//     );
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// verTodasLasTareas();

// const verUnaTarea = async (idTask) => {
//   try {
//     const response = await fetch(
//       "https://65c180d7dc74300bce8dac91.mockapi.io/api/task/" + idTask
//     );
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

/* 
{
  method: "GET",
  
}
*/
// verUnaTarea(5);

// fetch(url, header)
// const task = {
//   title: "Hola que hace",
//   status: "Pendiente",
// };

// const crearTarea = async (tarea) => {
//   try {
//     const response = await fetch(
//       "https://65c180d7dc74300bce8dac91.mockapi.io/api/task",
//       {
//         method: "POST",
//         body: JSON.stringify(tarea),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(response); // Me va a mostrar toda la configuracion (Encabezado/header) de la api
//     const data = await response.json();
//     console.log(data); // Me va a mostrar la respuesta en si. El contenido de esa respuesta
//     return data;
//   } catch (error) {
//     console.log(error)
//   }
// };

// crearTarea(task);

// const task = {
//   status: "PENDIENTE",
// };

// const actualizarTask = async (idTask) => {
//   try {
//     const response = await fetch(
//       `https://65c180d7dc74300bce8dac91.mockapi.io/api/task/${idTask}`,
//       {
//         method: "PUT",
//         body: JSON.stringify(task),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(response); // Me va a mostrar toda la configuracion (Encabezado/header) de la api
//     const data = await response.json();
//     console.log(data); // Me va a mostrar la respuesta en si. El contenido de esa respuesta
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// actualizarTask(1);

const eliminarTarea = async (idTask) => {
  try {
    const response = await fetch(
      `https://65c180d7dc74300bce8dac91.mockapi.io/api/task/${idTask}`,
      {
        method: "DELETE",
      }
    );
    console.log(response); // Me va a mostrar toda la configuracion (Encabezado/header) de la api
    const data = await response.json();
    console.log(data); // Me va a mostrar la respuesta en si. El contenido de esa respuesta
    return data;
  } catch (error) {
    console.log(error);
  }
};

eliminarTarea(10);
