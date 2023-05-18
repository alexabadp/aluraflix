import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../App.css";

const StyleMain = styled.section``;

const SectionVideo = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <h1>React multi carousel</h1>
      <Carousel responsive={responsive}>
        <div className="card">
          <video autoPlay muted loop>
            <source src="../../../video/concierto.mp4" type="video/mp4" />
          </video>
          <h2>Sport sneaker</h2>
          <p>Somo descripcion about product...</p>
          <p>
            <button>Add to card</button>
          </p>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default SectionVideo;
