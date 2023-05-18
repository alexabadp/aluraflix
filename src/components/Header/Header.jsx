import styled from "styled-components";

const StyleHeader = styled.header`
  background: #000;
`;

const StyleContainer = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: auto;
  align-items: center;
  padding: 15px 0;
`;

const StyleButtonNewVideo = styled.button`
  width: 180px;
  height: 54px;
  background: #000;
  border: 1px solid #f5f5f5;
  color: #fff;
  border-radius: 4px;
  font-size: 21px;
`;

import Logo from "../Logo";

const Header = () => {
  return (
    <StyleHeader>
      <StyleContainer>
        <Logo />
        <StyleButtonNewVideo>Nuevo Video</StyleButtonNewVideo>
      </StyleContainer>
    </StyleHeader>
  );
};

export default Header;
