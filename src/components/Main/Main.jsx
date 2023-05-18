import styled from "styled-components";
import main from "../../images/main.png";

const StyleMain = styled.main`
  background-image: url(${main});
  height: 83.2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  overflow: hidden;
`;

const StyleOverlay = styled.div`
  position: absolute;
  background: rgb(2, 25, 195);
  background: linear-gradient(
    270deg,
    rgba(0, 18, 51, 0.56) 0%,
    rgba(0, 18, 51, 0.56) 100%
  );
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyleContenidoImagen = styled.div`
  width: 95%;
  max-width: 140rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  row-gap: 5rem;
  .contenido-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #fff;
      background-color: rgba(107, 209, 255, 1);
      width: 296px;
      height: 92px;
      border-radius: 4px;
      font-size: 60px;
      font-weight: 400;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 3rem 0;
    }

    h2 {
      font-size: 46px;
      font-weight: 400;
      color: #f5f5f5;
      margin: 0 0 2rem 0;
    }

    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 21px;
      color: #f5f5f5;
      text-align: justify;
      max-width: 661px;
    }
  }
  video {
    width: 95%;
    max-width: 646px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 5rem;

    .contenido-flex {
      align-items: flex-start;
    }
  }
`;

const Main = () => {
  return (
    <StyleMain>
      <StyleOverlay>
        <StyleContenidoImagen>
          <div className="contenido-flex">
            <h1>Front End</h1>
            <h2>Challenge React</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis id necessitatibus assumenda perspiciatis quam nam
              nulla, esse officiis quisquam hic delectus suscipit?
            </p>
          </div>
          <video autoPlay muted loop>
            <source src="../../../video/concierto.mp4" type="video/mp4" />
          </video>
        </StyleContenidoImagen>
      </StyleOverlay>
    </StyleMain>
  );
};

export default Main;
