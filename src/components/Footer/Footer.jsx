import styled from "styled-components";
import Logo from "../Logo";

const StyleFooter = styled.section`
  background-color: #000;
  display: flex;
  justify-content: center;
  padding: 20px 0 60px 0;
  border-top: 1px solid blue;
`;

const Footer = () => {
  return (
    <StyleFooter>
      <Logo className="logo" />
    </StyleFooter>
  );
};

export default Footer;
