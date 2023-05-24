import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Brightness6Icon from "@mui/icons-material/Brightness6";

import logo from "../../images/logo.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button variant="text">
            <img width="168px" height="40px" src={logo} alt="" />
          </Button>
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <Brightness6Icon />
            </IconButton>

            <Button variant="outlined" color="inherit">
              Login
            </Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
