import styled from 'styled-components'
import img from '../../assets/nature.jpg'

export const ErrorPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  scroll-behavior: unset;
`
export const ErrorContainer = styled.div`
  display: flex;
  width: 80vw;
  background-color: rgba(220, 220, 220, 0.72);
`

export const Error = styled.div`
  padding: 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 60%;
  color: #008f8f;

  h1 {
    font-size: 5vw;
    line-height: 5vw;
  }

  h2 {

    font-size: 28vw;
    line-height: 23vw;
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(255, 255, 255, 0);
    background-size: 100vw 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${img});
  }


  p {
    font-size: 2vw;
  }

  button {
    font-size: 2vw;
    padding: .5vw 1.5vw;
    border: .3vw solid #008f8f;
    border-radius: .2vw;
    color: #008f8f;
    background-color: transparent;
  }

`

export const Image = styled.div`
  width: 40%;

  img {
    width: 100%;
    height: 100%;
  }
`

