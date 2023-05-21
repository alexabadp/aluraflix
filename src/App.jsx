import Footer from "./components/Footer/Footer";
import FormNewVideo from "./components/Forms/FormNewVideo";

import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";

import Brightness6Icon from "@mui/icons-material/Brightness6";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState();

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDark(!dark)}
          >
            <Brightness6Icon />
          </IconButton>
          <Typography>Formulario Nuevo Video</Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <Container component="main" maxWidth="sm">
        <FormNewVideo />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
