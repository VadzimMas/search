import styled from 'styled-components'
import {adaptiveSize} from '../../../../../styled/mixins'

const DirectoryItemStyled = styled.div`
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--sidebar-text-color);
  border-radius: 5px;
  padding: 2px;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .title-container {
      opacity: 0.9;
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title-container {
    padding-top: ${adaptiveSize(20, 5)};
    padding-bottom: ${adaptiveSize(20, 5)};
    padding-left: ${adaptiveSize(30, 10)};
    padding-right: ${adaptiveSize(30, 10)};
    border: 1px solid var(--sidebar-text-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--body-background);
    opacity: 0.7;
    position: absolute;
    font-size: ${adaptiveSize(30, 13)};
    color: var(--sidebar-text-color);
    text-transform: capitalize;


    .title {
      font-weight: bold;
    }

    .shop-now {
      font-weight: lighter;
    }
  }

`

export default DirectoryItemStyled