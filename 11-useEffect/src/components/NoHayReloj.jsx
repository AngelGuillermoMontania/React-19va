import { useEffect } from "react";

export default function NoHayReloj() {
  useEffect(() => {
    return () => {
      // DESMONTAJE
      console.log("Desmontaje NO HAY RELOJ");
    };
  }, []);

  return <h1>NoHayReloj</h1>;
}
