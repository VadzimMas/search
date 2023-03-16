import styled from 'styled-components'
import {adaptiveSize} from '../../../../styled/mixins'

const CheckoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${adaptiveSize(40, 15)};
  padding: 1%;

  .header {
    display: flex;
    justify-content: space-between;

    > * {
      width: 25%;
      text-align: center;
    }

  }

  .renderedProducts {

  }

  .total {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid black;
    padding: 1%;
    font-size: ${adaptiveSize(50, 20)};

    span:nth-child(1) {
      margin-right: 1%;
    }
  }
`

export default CheckoutStyled




