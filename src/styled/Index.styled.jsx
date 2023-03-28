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
      --body-background: rgba(17, 16, 23, 0.90);
    }

    @media (prefers-color-scheme: light) {
      --sidebar-bg-color: rgba(245, 222, 179, 0.90);
      --sidebar-active-bg-color: rgba(17, 16, 23, 0.90);
      --sidebar-text-color: rgba(17, 16, 23, 0.90);
      --sidebar-active-text-color: rgba(245, 222, 179, 0.90);
      --sidebar-border-color: rgba(17, 16, 23, 0.90);
      --body-background: rgba(245, 222, 179, 0.90);
    }
  }


  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu Condensed', sans-serif;
    background-color: var(--body-background);

    #root {
      max-width: 1920px;
      margin: 0 auto;
    }
  }

  button {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 15px;
    background-color: var(--body-background);
    color: var(--sidebar-text-color);
    border: 1px solid var(--sidebar-text-color);
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    user-select: none;
    transition: .2s;

    @media (hover: hover) {
      &:hover {
        background-color: var(--sidebar-text-color);
        color: var(--body-background);
        border: 1px solid var(--body-background);
      }
    }

    &:active {
      background-color: deepskyblue;
      color: black;
    }

    ////////////////////////////////////////////////////////////////////////////
    &.google {
      background-color: deepskyblue;
      color: black;
      @media (hover: hover) {
        &:hover {
          background-color: #0068fd;
          color: white;
        }
      }

      &:active {
        background-color: red;
        color: black;
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    &.inverted {
      background-color: var(--sidebar-text-color);
      color: var(--body-background);
      border: 1px solid var(--body-background);

      @media (hover: hover) {
        &:hover {
          background-color: var(--body-background);
          color: var(--sidebar-text-color);
          border: 1px solid var(--sidebar-text-color);
        }
      }

      &:active {
        background-color: deepskyblue;
        color: black;
      }
    }

    ////////////////////////////////////////////////////////////////////////////

  }

`

export default IndexStyled