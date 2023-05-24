/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleCard = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* max-width: 320px; */
  margin: auto 1rem;
  text-align: center;
`;

const StyleVideo = styled.video`
  width: 100%;
  min-width: 432px;
  height: 280px;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

const Video = (props) => {
  return (
    <StyleCard>
      <img
        width="100%"
        height="100%"
        src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
    </StyleCard>
  );
};

export default Video;
