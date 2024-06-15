import logo from "../assets/images/logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Badge, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const { cantidadEnCarrito } = useContext(CartContext);

  console.log(user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ zIndex: 9999 }} color="secondary">
        <Toolbar disableGutters>
          <Box
            width={100}
            height={100}
            sx={{ marginX: 5, cursor: "pointer" }}
            onClick={(e) => navigate("/")}
          >
            <Typography>CalzAdas</Typography>
            <img
              style={{ width: "100%", height: "100%" }}
              srcSet={logo}
              src={logo}
              alt="CalzAdas"
              loading="lazy"
            />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Button
                onClick={(e) => navigate("/Deportivas")}
                variant="contained"
                color="error"
                sx={{ width: "100%" }}
              >
                <Typography textAlign="center">Deportivas</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={(e) => navigate("/Urbanas")}
                variant="contained"
                color="error"
                sx={{ width: "100%" }}
              >
                <Typography textAlign="center">Urbanas</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={(e) => navigate("/Zapatos")}
                variant="contained"
                color="error"
                sx={{ width: "100%" }}
              >
                <Typography textAlign="center">Zapatos</Typography>
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              justifyContent: "space-between",
              width: "20%",
            }}
          >
            <Badge
              badgeContent={cantidadEnCarrito()}
              color="primary"
              onClick={(e) => navigate("/cart")}
            >
              <FaShoppingCart height="20" width="20" fontSize="25px" />
            </Badge>
            {user?.email == "angelguillermomontania@gmail.com" ? (
              <Link to="/modificarProductos">IR A VISTA DE ADMINISTRADOR</Link>
            ) : (
              ""
            )}
            {isAuthenticated ? (
              <>
                <Avatar alt="Remy Sharp" src={user?.picture} />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
