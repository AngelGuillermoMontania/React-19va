import logo from "../assets/images/logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, ImageListItem, MenuItem } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ zIndex: 9999 }} color="secondary">
        <Toolbar disableGutters>
          <Box
            width={100}
            height={100}
            sx={{ marginX: 5, cursor: "pointer" }}
            onClick={() => navigate("/")}
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
                onClick={() => navigate("/Deportivas")}
                variant="contained"
                color="error"
                sx={{ width: "100%" }}
              >
                <Typography textAlign="center">Deportivas</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() => navigate("/Urbanas")}
                variant="contained"
                color="error"
                sx={{ width: "100%" }}
              >
                <Typography textAlign="center">Urbanas</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() => navigate("/Zapatos")}
                variant="contained"
                color="error"
                sx={{ width: "100%" }}
              >
                <Typography textAlign="center">Zapatos</Typography>
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
