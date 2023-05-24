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

  return (
    <StyleBackground>
      {/* Esto tambien debe venir de un prop */}
      <StyleCategoria>Front End</StyleCategoria>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* Esto debe venir de un prop */}
        {frontend}
      </Carousel>
    </StyleBackground>
  );
};

export default SectionVideos;
