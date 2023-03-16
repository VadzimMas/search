import styled from 'styled-components'
import {adaptiveSize} from '../../../../../styled/mixins'

const CartItemStyled = styled.div`

  color: rgba(0, 0, 0, 0.76);
  border: 1px solid black;
  margin: 0 0 1% 0;
  font-size: ${adaptiveSize(35, 15)};
  padding: 1%;
  width: 100%;

  .name {
    margin: 0 0 1% 0;
  }

  .info {
    display: flex;
    margin: 0 0 1% 0;
    gap: 1%;

    .img {
      width: 40%;
      aspect-ratio: 1/1.5;
      object-fit: cover;
    }

    .quantity {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .price {
        display: flex;
        justify-content: space-between;
      }

      .count {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .up {
          &:hover {
            color: red;
          }
        }

        .down {
          &:hover {
            color: red;
          }

        }
      }
    }

  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${adaptiveSize(50, 15)};

    .delete {
      &:hover {
        color: red;
      }
    }
  }


`

export default CartItemStyled

