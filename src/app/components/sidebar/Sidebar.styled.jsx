import styled from 'styled-components'
import {adaptiveSize} from '../../../styled/mixins'

const SidebarStyled = styled.div`

  @media (min-width: 769px) {
    height: 100vh;
    width: 100%;
    display: flex;
    position: sticky;
    z-index: 5;
    top: 0;
    left: 0;

    .container {
      display: flex;
      position: sticky;

      .menu {
        display: none;
      }

      .nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 ${adaptiveSize(10, 1)};
        background: var(--sidebar-bg-color);
        backdrop-filter: blur(20px);
        cursor: pointer;
        transition: .2s;
        margin: 0;
        border: 0;


        .link {
          width: 100%;
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: ${adaptiveSize(10, 1)};
          border: clamp(0.5px, 0.1vw, 5px) solid transparent;
          color: var(--sidebar-text-color);
          margin: clamp(5px, 0.5vw, 20px) 0 0 0;

          .linkIcon {
            width: ${adaptiveSize(55, 12)};
            height: ${adaptiveSize(55, 12)};
            aspect-ratio: 1/1;
            transition: .2s;

            svg {
              width: 100%;
              height: 100%;
            }
          }

          .linkTitle {
            transition: .1s;
            white-space: nowrap;
            font-size: 0;
          }

          &:hover {
            border-radius: 5px;
            border: clamp(0.5px, 0.1vw, 5px) solid var(--sidebar-border-color);
          }

          &.active {
            background-color: var(--sidebar-active-bg-color);
            color: var(--sidebar-active-text-color);
            border-radius: 5px;
            border: clamp(0.5px, 0.1vw, 5px) solid var(--sidebar-border-color);
          }
        }

        &:hover {

          .link {
            gap: 1vw;

            .linkIcon {
              svg {
              }
            }

            .linkTitle {
              font-size: ${adaptiveSize(22, 15)};
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    position: sticky;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: unset;
    background: var(--sidebar-bg-color);
    backdrop-filter: blur(20px);
    .menu {
      display: block;
      width: clamp(35px, 10vw, 50px);
      height: clamp(35px, 10vw, 50px);
      transition: .2s;
      cursor: pointer;
      color: var(--sidebar-active-bg-color);

      &.active {
        transform: rotate(90deg);
      }
    }

    .nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 ${adaptiveSize(10, 1)};
      background: var(--sidebar-bg-color);

      cursor: pointer;
      transition: .2s;
      margin: 0;
      border: 0;
      position: absolute;
      top: 100%;
      left: -100%;
      height: calc(100vh - clamp(35px, 10vw, 50px));

      &.active {
        left: 0;
      }

      .link {
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: ${adaptiveSize(10, 1)};
        border: clamp(0.5px, 0.1vw, 5px) solid transparent;
        color: var(--sidebar-text-color);
        margin: clamp(5px, 0.5vw, 20px) 0 0 0;
        gap: ${adaptiveSize(30, 10)};

        .linkIcon {
          width: ${adaptiveSize(110, 30)};
          height: ${adaptiveSize(110, 30)};
          transition: .2s;

          svg {
            width: 100%;
            height: 100%;
          }
        }

        .linkTitle {
          transition: .1s;
          white-space: nowrap;
          font-size: ${adaptiveSize(50, 20)};
        }

        &:hover {
          border-radius: 5px;
          border: clamp(0.5px, 0.1vw, 5px) solid var(--sidebar-border-color);
        }

        &.active {
          background-color: var(--sidebar-active-bg-color);
          color: var(--sidebar-active-text-color);
          border-radius: 5px;
          border: clamp(0.5px, 0.1vw, 5px) solid var(--sidebar-border-color);
        }
      }
    }
  }


//   @media (max-width: 768px) {
//     display: flex;
//     border: 2px solid red;
//     z-index: 5;
//     top: 0;
//     left: 0;
//     //width: min-content;
//     height: 100vh;
//     background: var(--sidebar-bg-color);
//     backdrop-filter: blur(20px);
//     .menu {
//       display: block;
//       width: clamp(35px, 10vw, 50px);
//       height: clamp(35px, 10vw, 50px);
//       transition: .2s;
//       cursor: pointer;
//       color: var(--sidebar-active-bg-color);
//
//       &.active {
//         transform: rotate(90deg);
//       }
//     }
//
//     .nav {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       padding: 0 ${adaptiveSize(10, 1)};
//       background: var(--sidebar-bg-color);
//       cursor: pointer;
//       transition: .2s;
//       margin: 0;
//       border: 0;
//
//       &.active {
//         left: 0;
//       }
//
//       .link {
//         width: 100%;
//         display: flex;
//         align-items: center;
//         text-decoration: none;
//         padding: ${adaptiveSize(10, 1)};
//         border: clamp(0.5px, 0.1vw, 5px) solid transparent;
//         color: var(--sidebar-text-color);
//         margin: clamp(5px, 0.5vw, 20px) 0 0 0;
//         gap: ${adaptiveSize(30, 10)};
//
//         .linkIcon {
//           width: ${adaptiveSize(110, 30)};
//           height: ${adaptiveSize(110, 30)};
//           transition: .2s;
//
//           svg {
//             width: 100%;
//             height: 100%;
//           }
//         }
//
//         .linkTitle {
//           transition: .1s;
//           white-space: nowrap;
//           font-size: ${adaptiveSize(50, 20)};
//         }
//
//         &:hover {
//           border-radius: 5px;
//           border: clamp(0.5px, 0.1vw, 5px) solid var(--sidebar-border-color);
//         }
//
//         &.active {
//           background-color: var(--sidebar-active-bg-color);
//           color: var(--sidebar-active-text-color);
//           border-radius: 5px;
//           border: clamp(0.5px, 0.1vw, 5px) solid var(--sidebar-border-color);
//         }
//       }
//     }
//   }
// `

export default SidebarStyled