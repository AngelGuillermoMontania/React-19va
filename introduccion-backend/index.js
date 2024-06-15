import express from "express";
import path from "path"; // Permite trabajar con las direcciones de carpetas o ubicaciones en la pc
import fs from "fs"; // Forma corta de decir "FileSystem". Permite crear, modificar, eliminar archivos de la pc

const server = express();

server.use(express.json({ limit: "50mb" }));

server.get("/", (req, res) => {
  // req ==> request(Lo que me solicitan o envian desde el front, toda su configuracion e informacion)
  // res ==> response(Lo que respondo, toda su configuracion e informacion)
  res.send("chau");
});

server.post("/", async (req, res) => {
  // El proceso seria decirle a la db que agregue esa zapato
  console.log(req.body); // req.body es lo que recibimos como objeto
  res.send({ ...req.body, id: 1 });
});

server.put("/", async (req, res) => {
  // Una vez recibimos el id por query le decimos
  // a la db que modifique el zapato con el id que nos llego por la query
  console.log(req.body);
  console.log(req.query); // req.query es lo que recibimos en la ruta despues del signo "?"
  res.send({ ...req.body });
});

server.delete("/", async (req, res) => {
  // Una vez recibimos el id por query le decimos
  // a la db que elimine el zapato con el id que nos llego por la query
  console.log(req.query);
  res.status(200).send();
});

server.listen(3001, () => {
  console.log("Nuestro primer back, en el puerto 3001");
});

// Middlewares
// asincronismo
// orm
// base de datos
