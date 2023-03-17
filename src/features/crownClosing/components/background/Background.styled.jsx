import styled from 'styled-components'

export const BackgroundColor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${({color}) => color || '#85FFBD'};
`

export const BackgroundImage = styled(BackgroundColor)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(   ${props.image}   )`};
`

export const BackgroundGradient = styled(BackgroundColor)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => props.gradient};
`


