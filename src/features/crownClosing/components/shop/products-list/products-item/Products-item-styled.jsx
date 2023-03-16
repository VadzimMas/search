import styled from 'styled-components'
import {adaptiveSize} from '../../../../../../mixins'

const ProductsItemStyled = styled.div`

  .title {
    font-size: ${adaptiveSize(70, 30)};
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    margin: 2% 0;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1vw;
  }

  &:nth-child(1) {
    .title {
      margin-top: unset;
    }
  }
`

export default ProductsItemStyled
