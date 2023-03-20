import styled from 'styled-components'
import {adaptiveSize} from '../../../../styled/mixins'


export const NavbarStyled = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  transition: .3s;
  color: var(--sidebar-active-bg-color);
  background-color: var(--sidebar-bg-color);
  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    top: ${adaptiveSize(90, 35)};
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
  padding: ${adaptiveSize(20, 5)};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  .logo-container {
    color: inherit;
    width: ${adaptiveSize(100, 40)};
    height: ${adaptiveSize(100, 29)};

    .svg {
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
      color: inherit;
      border: clamp(0.5px, 0.1vw, 5px) solid transparent;
      border-radius: 10%;
      font-size: ${adaptiveSize(30, 15)};
      padding: 0.4rem 0.9rem;
      margin: 0 0 0 0.5rem;
      cursor: pointer;
      text-decoration: none;
      white-space: nowrap;

      &:hover {
        border-radius: 5px;
        border: clamp(0.5px, 0.1vw, 5px) solid var(--sidebar-active-bg-color);
      }

      &.active {
        background-color: var(--sidebar-active-bg-color);
        color: var(--sidebar-active-text-color);

        &:hover {
          border-radius: 5px;
          border: clamp(0.5px, 0.1vw, 5px) solid transparent;
        }
      }
    }

    .cart-container {
      position: relative;
      width: ${adaptiveSize(60, 30)};
      aspect-ratio: 1/1;
      margin: 0 0 0 0.5rem;
      cursor: pointer;
      color: inherit;

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
          top: 25%;
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

