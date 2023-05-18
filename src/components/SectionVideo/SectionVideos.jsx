import "../../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Video from "../Video";
import { videoData, responsive } from "../../data";

import styled from "styled-components";

const StyleBackground = styled.section`
  background-color: #000;
  margin: 0;
  padding: 10px;
`;
const StyleCategoria = styled.h2`
  background-color: #00c86f;
  display: inline-block;
  padding: 10px;
  margin: 10px;

  font-size: 35px;
  text-align: center;
  color: #f5f5f5;
  font-weight: 400;
`;

const SectionVideos = () => {
  const videoFrontend = videoData.filter((e) => e.categoria == "frontend");
  const frontend = videoFrontend.map((e) => (
    <Video key={e.id} url={e.videourl} />
  ));

  const videobackend = videoData.filter((e) => e.categoria == "backend");
  const backend = videobackend.map((e) => (
    <Video key={e.id} url={e.videourl} />
  ));

  const videogestion = videoData.filter((e) => e.categoria == "gestion");
  const gestion = videogestion.map((e) => (
    <Video key={e.id} url={e.videourl} />
  ));

  return (
    <StyleBackground>
      <StyleCategoria>Front End</StyleCategoria>
      <Carousel responsive={responsive}>{frontend}</Carousel>
      <StyleCategoria>Back End</StyleCategoria>
      <Carousel responsive={responsive}>{backend}</Carousel>
      <StyleCategoria>Gestion e Innovacion</StyleCategoria>
      <Carousel responsive={responsive}>{gestion}</Carousel>
    </StyleBackground>
  );
};

export default SectionVideos;
