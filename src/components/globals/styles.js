import { createGlobalStyle } from "styled-components";

export const theme = {
  mainTitle: "#fff",
  backgroundMain: "#F55536",
  titleBackground: "#FABC3C",
  secondaryColor: "#F19143",
  secondaryTextBg: "#FFB238"
};

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

`;
