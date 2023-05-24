import Footer from "./components/Footer/Footer";
// import FormNewVideo from "./components/Forms/FormNewVideo";
// import FormNewCategoria from "./components/Forms/FormNewCategoria";

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
// import SectionVideos from "./components/SectionVideo/SectionVideos";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [dark, setDark] = useState();

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  // const items = [
  //   {
  //     title: "hola",
  //     description: "klk mano",
  //   },
  //   {
  //     title: "hola 2",
  //     description: "klk mano 2",
  //   },
  //   {
  //     title: "hola 3",
  //     description: "klk mano 3",
  //   },
  //   {
  //     title: "hola 4",
  //     description: "klk mano 4",
  //   },
  //   {
  //     title: "hola 5",
  //     description: "klk mano 5",
  //   },
  //   {
  //     title: "hola 6",
  //     description: "klk mano 6",
  //   },
  // ];

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

      <Header />

      {/* <Container component="main" maxWidth="xl">
        <SectionVideos />
      </Container> */}
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
