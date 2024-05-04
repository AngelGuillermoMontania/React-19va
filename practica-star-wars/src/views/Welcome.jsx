import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fondo from "../assets/images/fondo/welcome.svg";
import usePeople from "../hooks/usePeople";

export default function Welcome() {
  const navigate = useNavigate();

  const { allPeople, getPeopleCarrusel } = usePeople();

  useEffect(() => {
    getPeopleCarrusel();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${fondo})`,
        minHeight: "90vh",
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h1"
          component="h2"
          gutterBottom
          sx={{ color: "#FFFFFF" }}
        >
          Welcome to StarWars
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: "#FFFFFF" }}
        >
          This is a simple web app to show information about StarWars
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "space-around", width: "50%" }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/people")}
          >
            People
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/planet")}
          >
            Planets
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
