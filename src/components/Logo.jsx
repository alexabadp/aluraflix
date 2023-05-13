import logo from "../images/logo.png";
import styled from "styled-components";

const StyleImg = styled.img`
  width: 168px;
  height: 40px;
`;

const Logo = () => {
  return (
    <>
      <StyleImg src={logo} alt="Logo de la pagina" />
    </>
  );
};

export default Logo;
