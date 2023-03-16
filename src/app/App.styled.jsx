import styled from 'styled-components'

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 5% auto;

  .detail {
  }
}

@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  width: 100vw;

  .detail {
    width: 100%;
  }
`

export default AppStyled