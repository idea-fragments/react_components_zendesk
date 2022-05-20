import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Karla:wght@200;400;500;600;700&display=swap');

  html {
    font-family: Karla,
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-size: 14px;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    //scroll-behavior: smooth;

    *::selection {
      background: ${({ theme }) => theme.styles.colorPrimary};
      color: ${({ theme }) => theme.styles.getTextColorForBackground({
        color: theme.styles.colorPrimary,
        theme,
      })};
    }
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.styles.textColorPrimary};
  }

  *, *:before, *:after {
    font-family: inherit;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    outline: none;
  }
`
