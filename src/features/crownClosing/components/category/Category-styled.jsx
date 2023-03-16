import styled, {keyframes} from 'styled-components'
import {adaptiveSize} from '../../../../styled/mixins'

const s = adaptiveSize(400, 300)

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const CategoryStyled = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: column;

  .title {
    font-size: ${adaptiveSize(70, 30)};
    text-transform: capitalize;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    margin: 0 0 2% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .loading {
      animation: ${rotate} 1s linear infinite;
    }
  }

  .products {
    display: grid;
    grid-template-columns:repeat(auto-fill, minmax(clamp(300px, 25vw, 400px), 1fr));
    gap: 1vw;
  }
}
`

export default CategoryStyled
