import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: Karla,
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-size: ${({ theme }) => theme.styles.font.size};

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    //scroll-behavior: smooth;

    *::selection {
      background: ${({ theme }) => theme.styles.colorPrimary};
      color: ${({ theme }) =>
        theme.styles.getTextColorForBackground({
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
