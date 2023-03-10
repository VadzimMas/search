import styled from 'styled-components'
import {adaptiveSize} from '../../../../mixins'

export const NavbarStyled = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  @media (max-width: 768px) {
    top: ${adaptiveSize(120, 50)};
    &:before {
      content: '';
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: inherit;
    }
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: ${adaptiveSize(30, 10)};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  .logo-container {
    width: ${adaptiveSize(120, 50)};
    height: ${adaptiveSize(120, 39)};

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .links-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .link {
      border: 1px black solid;
      font-size: ${adaptiveSize(30, 15)};
      padding: 0.4rem 0.9rem;
      margin: 0 0 0 0.5rem;
      cursor: pointer;
      color: #090320;
      text-decoration: none;
      white-space: nowrap;

      &.active {
        color: red;
      }
    }

    .cart-container {
      position: relative;
      width: ${adaptiveSize(80, 40)};
      aspect-ratio: 1/1;
      margin: 0 0 0 0.5rem;
      cursor: pointer;

      .img-container {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 100%;
          height: 100%;
        }

        .count {
          position: absolute;
          top: 45%;
          font-size: ${adaptiveSize(30, 15)};
        }
      }

      .cart-popup {
        position: absolute;
        z-index: 2;
        display: flex;
        flex-direction: column;
        top: 100%;
        right: 50%;
        width: ${adaptiveSize(600, 300)};
      }
    }
  }
`

