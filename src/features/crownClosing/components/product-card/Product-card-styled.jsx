import styled from 'styled-components'
import {adaptiveSize} from '../../../../mixins'

const ProductCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
`

export const Title = styled.h2`
  white-space: nowrap;
  font-size: ${adaptiveSize(32, 20)};
  font-weight: lighter;
`

export const Price = styled.h2`
  font-size: ${adaptiveSize(32, 20)};
  white-space: nowrap;
  font-weight: lighter;
`

export const Img = styled.img`
  width: 100%;
  aspect-ratio: 1/1.5;
  object-fit: cover;
`

export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: .2s;

  button {
    position: absolute;
    inset: 70% 5% auto 5%;
    width: auto;
    font-size: ${adaptiveSize(30, 20)};
    font-weight: normal;
    opacity: 0;
    transition: .2s;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);

    button {
      opacity: 1;
    }
  }
`

export default ProductCardStyled