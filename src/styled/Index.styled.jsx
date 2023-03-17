import {createGlobalStyle} from 'styled-components'

const IndexStyled = createGlobalStyle`


  html {
    // prevents drain screen when scroll
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    overscroll-behavior: contain;


    //main page theme
    @media (prefers-color-scheme: dark) {
      --sidebar-bg-color: rgba(17, 16, 23, 0.90);
      --sidebar-bg-color-active: rgb(17, 16, 23);
      --sidebar-active-bg-color: rgba(245, 222, 179, 0.80);
      --sidebar-text-color: wheat;
      --sidebar-active-text-color: rgba(17, 16, 23, 0.90);
      --sidebar-border-color: wheat;
    }

    @media (prefers-color-scheme: light) {
      --sidebar-bg-color: rgba(245, 222, 179, 0.90);
      --sidebar-active-bg-color: rgba(17, 16, 23, 0.90);
      --sidebar-text-color: rgba(17, 16, 23, 0.90);
      --sidebar-active-text-color: rgba(245, 222, 179, 0.90);
      --sidebar-border-color: rgba(17, 16, 23, 0.90);
    }
  }


  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu Condensed', sans-serif;

    #root {
      max-width: 1920px;
      margin: 0 auto;
    }
  }

`

export default IndexStyled