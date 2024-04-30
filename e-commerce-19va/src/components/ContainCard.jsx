import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import db from "../../firebaseConfig.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card.jsx";
import { Box, Container, Grid } from "@mui/material";

export default function ContainCard() {
  const { category } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      // 1- Obtiene la coleccion
      const coleccionProducto = collection(db, "producto");

      // 2- Obtiene los documentos de una coleccion
      const docs = await getDocs(coleccionProducto);

      // 3- Recorro los documentos para hacer un console.log por cada uno
      const docsProductos = [];

      docs.forEach((doc) => {
        docsProductos.push({ id: doc.id, ...doc.data() });
      });
      console.log(docsProductos);
      setProductos(docsProductos);
    }
    async function getOneCategory() {
      console.log("category", category);
      // 1- Obtiene la coleccion
      const coleccionProducto = collection(db, "producto");

      const q = query(coleccionProducto, where("categoria", "==", category));

      // 2- Obtiene los documentos de una coleccion
      const docs = await getDocs(q);

      // 3- Recorro los documentos para hacer un console.log por cada uno
      const docsProductos = [];

      docs.forEach((doc) => {
        docsProductos.push({ id: doc.id, ...doc.data() });
      });
      console.log(docsProductos);
      setProductos(docsProductos);
    }

    if (category) {
      getOneCategory();
    } else {
      getAllProducts();
    }
  }, [category]);

  // async function obtenerUnDocumento() {
  //   // 1- Obtiene la referencia indicandole con cual documento quiero trabajar
  //   const docRef = doc(db, "producto", "ngqtrwWfpouNiuc1C6Cw");

  //   // 2- Obtiene todo lo que se encuentra en esa referencia
  //   const docSnap = await getDoc(docRef);

  //   // 3- Consulto si existe
  //   if (docSnap.exists()) {
  //     // Si existe lo guardo en el estado correspondiente
  //     console.log({ id: docSnap.id, ...docSnap.data() });
  //     setProducto({ id: docSnap.id, ...docSnap.data() });
  //   } else {
  //     // Si no existe muetro un mensaje por consola
  //     console.log("No existe ese documento!");
  //   }
  // }

  // async function agregarUnDocumento() {
  //   // 1- Obtiene la coleccion
  //   const coleccion = collection(db, "producto");

  //   // Agregamos el documento
  //   const docRef = await addDoc(coleccion, {
  //     categoria: "Deportiva",
  //     descripcion: "Tuki",
  //     img: "www.blablabla.com",
  //     marca: "Ardidas",
  //     modelo: "Las de Messi",
  //     precio: "5",
  //     stock: 6,
  //   });

  //   // Luego podriamos hacer lo que sea
  //   console.log("Document written with ID: ", docRef.id);
  //   setProductos([...productos, { id: docRef.id, ...docRef.data() }]);
  // }

  // async function editarUnDocumento() {
  //   // 1- Obtengo la referencia al documento que quiero editar
  //   const docRef = doc(db, "producto", "ngqtrwWfpouNiuc1C6Cw");

  //   // 2- Actualizo el documento, con lo que tenga en el objeto
  //   const docActualizado = await updateDoc(docRef, {
  //     categoria: "Formales",
  //     descripcion: "",
  //   });

  //   setProductos(
  //     productos.map((elem) => {
  //       if (elem.id === "ngqtrwWfpouNiuc1C6Cw") {
  //         return { id: docActualizado.id, ...docActualizado.data() };
  //       }
  //       return elem;
  //     })
  //   );
  // }

  // async function eliminarUnDocumento() {
  //   // 1- Consultar por el documento a la eliminar
  //   const docRef = doc(db, "producto", "ngqtrwWfpouNiuc1C6Cw");

  //   // 2- Efectivamente, eliminar el documento
  //   await deleteDoc(docRef);

  //   setProductos(
  //     productos.filter((elem) => elem.id !== "ngqtrwWfpouNiuc1C6Cw")
  //   );
  // }

  return (
    <Box sx={{ paddingTop: "60px", display: "flex" }}>
      <Grid container>
        {productos.map((calzado) => (
          <Card key={calzado.id} calzado={calzado} />
        ))}
      </Grid>
    </Box>
  );
}
