/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleCard = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 320px;
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
      <StyleVideo src={props.videourl} muted loop>
        <source src="../../../video/concierto.mp4" type="video/mp4" />
      </StyleVideo>
    </StyleCard>
  );
};

export default Video;
