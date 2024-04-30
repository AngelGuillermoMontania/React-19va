// import {
//   collection,
//   getDocs,
//   doc,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";
// import db from "../../firebaseConfig.js";
// import { useState } from "react";

// export default function ContainCardEjemploFirebase() {
//   const [productos, setProductos] = useState([]);
//   const [producto, setProducto] = useState({});

//   async function obtenerTodosLosDocumentos() {
//     // 1- Obtiene la coleccion
//     const coleccionProducto = collection(db, "producto");

//     // 2- Obtiene los documentos de una coleccion
//     const docs = await getDocs(coleccionProducto);

//     // 3- Recorro los documentos para hacer un console.log por cada uno
//     const docsProductos = [];

//     docs.forEach((doc) => {
//       docsProductos.push({ id: doc.id, ...doc.data() });
//     });

//     setProductos(docsProductos);
//   }

//   async function obtenerUnDocumento() {
//     // 1- Obtiene la referencia indicandole con cual documento quiero trabajar
//     const docRef = doc(db, "producto", "ngqtrwWfpouNiuc1C6Cw");

//     // 2- Obtiene todo lo que se encuentra en esa referencia
//     const docSnap = await getDoc(docRef);

//     // 3- Consulto si existe
//     if (docSnap.exists()) {
//       // Si existe lo guardo en el estado correspondiente
//       console.log({ id: docSnap.id, ...docSnap.data() });
//       setProducto({ id: docSnap.id, ...docSnap.data() });
//     } else {
//       // Si no existe muetro un mensaje por consola
//       console.log("No existe ese documento!");
//     }
//   }

//   async function agregarUnDocumento() {
//     // 1- Obtiene la coleccion
//     const coleccion = collection(db, "producto");

//     // Agregamos el documento
//     const docRef = await addDoc(coleccion, {
//       categoria: "Deportiva",
//       descripcion: "Tuki",
//       img: "www.blablabla.com",
//       marca: "Ardidas",
//       modelo: "Las de Messi",
//       precio: "5",
//       stock: 6,
//     });

//     // Luego podriamos hacer lo que sea
//     console.log("Document written with ID: ", docRef.id);
//     setProductos([...productos, { id: docRef.id, ...docRef.data() }]);
//   }

//   async function editarUnDocumento() {
//     // 1- Obtengo la referencia al documento que quiero editar
//     const docRef = doc(db, "producto", "ngqtrwWfpouNiuc1C6Cw");

//     // 2- Actualizo el documento, con lo que tenga en el objeto
//     const docActualizado = await updateDoc(docRef, {
//       categoria: "Formales",
//       descripcion: "",
//     });

//     setProductos(
//       productos.map((elem) => {
//         if (elem.id === "ngqtrwWfpouNiuc1C6Cw") {
//           return { id: docActualizado.id, ...docActualizado.data() };
//         }
//         return elem;
//       })
//     );
//   }

//   async function eliminarUnDocumento() {
//     // 1- Consultar por el documento a la eliminar
//     const docRef = doc(db, "producto", "ngqtrwWfpouNiuc1C6Cw");

//     // 2- Efectivamente, eliminar el documento
//     await deleteDoc(docRef);

//     setProductos(
//       productos.filter((elem) => elem.id !== "ngqtrwWfpouNiuc1C6Cw")
//     );
//   }

//   return (
//     <div>
//       <button onClick={obtenerTodosLosDocumentos}>
//         CONSULTAR TODOS LOS DOCUMENTOS
//       </button>
//       <button onClick={obtenerUnDocumento}>CONSULTAR UN DOCUMENTO</button>
//       <button onClick={agregarUnDocumento}>AGREGAR UN DOCUMENTO</button>
//       <button onClick={editarUnDocumento}>EDITAR UN DOCUMENTO</button>
//       <button onClick={eliminarUnDocumento}>ELIMINAR UN DOCUMENTO</button>
//     </div>
//   );
// }

// // ----------  OBTENER TODOS LOS DOCUMENTOS DE UNA COLECCION  -----------
// // import { collection, getDocs } from "firebase/firestore";

// // const querySnapshot = await getDocs(collection(db, "cities"));
// // querySnapshot.forEach((doc) => {
// //   // doc.data() is never undefined for query doc snapshots
// //   console.log(doc.id, " => ", doc.data());
// // });

// // ----------  OBTENER UN SOLO DOCUMENTOS DE UNA COLECCION  -----------
// // import { doc, getDoc } from "firebase/firestore";

// // const docRef = doc(db, "cities", "SF");
// // const docSnap = await getDoc(docRef);

// // if (docSnap.exists()) {
// //   console.log("Document data:", docSnap.data());
// // } else {
// //   // docSnap.data() will be undefined in this case
// //   console.log("No such document!");
// // }

// // ----------- AGREGAR UN DOCUMENTO   ------------------------

// // import { collection, addDoc } from "firebase/firestore";

// // // Add a new document with a generated id.
// // const docRef = await addDoc(collection(db, "cities"), {
// //   name: "Tokyo",
// //   country: "Japan"
// // });
// // console.log("Document written with ID: ", docRef.id);

// // -------------- ACTUALIZAR UN DOCUMENTO ------------------

// // import { doc, updateDoc } from "firebase/firestore";

// // const washingtonRef = doc(db, "cities", "DC");

// // // Set the "capital" field of the city 'DC'
// // await updateDoc(washingtonRef, {
// //   capital: true
// // });

// // ------------------- ELIMINAR UN DOCUMENTO ------------------

// // import { doc, deleteDoc } from "firebase/firestore";

// // await deleteDoc(doc(db, "cities", "DC"));
