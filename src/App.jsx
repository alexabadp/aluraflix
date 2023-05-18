import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SectionVideos from "./components/SectionVideo/SectionVideos";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <SectionVideos />
      <Footer />
    </>
  );
}

export default App;
