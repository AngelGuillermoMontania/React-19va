import { Box, Container, Grid } from "@mui/material";
import CardPeople from "../components/CardPeople";
import fondo from "../assets/images/fondo/fondoPeople.jpeg";
import { useEffect } from "react";
import usePeople from "../hooks/usePeople";
import imagenes from "../assets/images/characters";

export default function ContainPeople() {
  const { allPeople, getAllPeople } = usePeople();

  useEffect(() => {
    getAllPeople();
  }, []);

  return (
    <Box sx={{ backgroundImage: `url(${fondo})`, minHeight: "90vh" }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          {allPeople.map((elem) => (
            <CardPeople
              key={elem.name}
              people={elem}
              img={imagenes[elem.name]}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
/* 
function saludar() {
  return "Hola"
}

let n1 = saludar()
n1 = n1 + " Como va?"
let n2 = saludar()
console.log(n1) // "Hola Como va?"
console.log(n2) // "Hola"
 */
