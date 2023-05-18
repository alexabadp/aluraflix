import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SectionVideo from "./components/SectionVideo/SectionVideo";

const videos = [
  {
    id: 1,
    title: "Video 1",
    url: "https://www.youtube.com/watch?v=6Dh-RL__uN4",
  },
  {
    id: 2,
    title: "Video 2",
    url: "https://www.youtube.com/watch?v=6Dh-RL__uN4",
  },
  {
    id: 3,
    title: "Video 3",
    url: "https://www.youtube.com/watch?v=6Dh-RL__uN4",
  },
  {
    id: 4,
    title: "Video 4",
    url: "https://www.youtube.com/watch?v=6Dh-RL__uN4",
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <SectionVideo />
    </>
  );
}

export default App;
