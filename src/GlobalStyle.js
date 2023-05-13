import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Monserrat', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: grey;
}

html{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
}

p{
    font-size: 2rem;
    color: #000;
    line-height: 1.5;
}

a{
    text-decoration: none;
}

h1, h2, h3{
    margin: 0 0 5rem 0
}

h1{
    font-size: 4rem;
}

h2{
    font-size: 3.6rem;
}

h3{
    font-size: 3rem;
}

img {
    max-width: 100%;
    width: 100%;
    height: auto;
    display: block;
}


`;

export default GlobalStyle;
