import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function ModifyProduct() {
  const { user } = useAuth0();

  return (
    <div>
      {user?.email == "angelguillermomontania@gmail.com" ? (
        <h1>TENES ACCESO A MODIFICAR O AGREGAR PRODUCTOS</h1>
      ) : (
        <h1>A DONDE CREES QUE VAS SI NO SOS ADMINISTRADOR DE ESTA PAGINA</h1>
      )}
    </div>
  );
}
