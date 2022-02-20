import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: system-ui;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
