// import styled from "styled-components";

// const StyleButtonNewVideo = styled.button`
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
//   background: ${(props) => props.background};
//   color: ${(props) => props.color};
//   /* border-radius: ${(props) => props.borderRadius};
//   font-size: ${(props) => props.fontSize}; */
// `;

const Button = ({ children, buttonStyle }) => {
  console.log(buttonStyle);
  return (
    // <StyleButtonNewVideo
    //   width={width}
    //   height={height}
    //   background={background}
    //   color={color}
    // >
    //   {children}
    // </StyleButtonNewVideo>
    <button className={buttonStyle}>{children}</button>
  );
};

export default Button;
