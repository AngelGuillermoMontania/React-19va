import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = ["People", "Planet"];
export default function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate("/")}
            >
              StarWars
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                variant="contained"
                color="secondary"
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate(`/${page.toLowerCase()}`)}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
