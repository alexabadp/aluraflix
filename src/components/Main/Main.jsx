import styled from "styled-components";
import main from "../../images/main.png";

const StyleMain = styled.div`
  position: relative;
  //max-height: 50rem;
  //min-height: 50rem;
  height: 70rem;
  overflow: hidden;
  /* .container {
    width: 50rem;
    height: 70rem;
    overflow: hidden;
    img {
      object-fit: cover;
      object-position: center center;
    }
  } */
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  object-repeat: no-repeat;
`;

const StyleOverlay = styled.div`
  position: absolute;
  background: rgb(2, 25, 195);
  background: linear-gradient(
    270deg,
    rgba(2, 25, 195, 0.38699229691876746) 0%,
    rgba(0, 31, 255, 0.4206057422969187) 100%
  );
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyleImg = styled.img`
  width: auto;
  display: block;
  object-fit: cover;
  object-position: center top;
  @media (min-width: 992px) {
    width: 100%;
  }
`;

const StyleContainerImg = styled.div`
  width: 95%;
  max-width: 160rem;
  margin: auto;
  z-index: 10;
  h2 {
    color: #fff;
    font-size: 7rem;
    margin: 0;
  }

  p {
    background-color: red;
    display: inline-block;
    padding: 1rem 2rem;
    color: #fff;
    font-weight: 700;
    font-size: 2.4rem;
    margin: 0;
  }
`;

// const StyleMain = styled.main`
//   background-image: url(${main});
//   height: 70rem;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
// `;

const Main = () => {
  return (
    <StyleMain>
      {/* <StyleOverlay>
        <StyleContainerImg>
          <h2>Challenge React</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            nostrum, nihil labore facere tempora cupiditate deleniti vel
            repellat, architecto reiciendis expedita soluta modi culpa
            recusandae consequuntur ipsum ducimus! Odio, nobis.
          </p>
        </StyleContainerImg>
      </StyleOverlay> */}
      <Image src={main} />
      {/* <div className="container">
        <img src={main} alt="" />
      </div> */}
      {/* <StyleImg src={main} alt="Imagen del main" /> */}
    </StyleMain>
    // <StyleMain>
    //   <StyleOverlay>
    //     <StyleContainerImg>
    //       <h2>Challenge React</h2>
    //       <p>
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
    //         nostrum, nihil labore facere tempora cupiditate deleniti vel
    //         repellat, architecto reiciendis expedita soluta modi culpa
    //         recusandae consequuntur ipsum ducimus! Odio, nobis.
    //       </p>
    //     </StyleContainerImg>
    //   </StyleOverlay>
    //   <StyleImg src={main} alt="Imagen del main" />
    // </StyleMain>
  );
};

export default Main;
