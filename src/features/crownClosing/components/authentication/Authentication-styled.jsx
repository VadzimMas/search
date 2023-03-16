import styled from 'styled-components'

const AuthenticationStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1vw;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`
export default AuthenticationStyled

// Authentication