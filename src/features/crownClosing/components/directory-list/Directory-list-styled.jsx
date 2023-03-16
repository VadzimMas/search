import styled from 'styled-components'

const DirectoryListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
         "a a b b c c"
         "d d d f f f";
  gap: 1vw;
  padding: 1vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
         "a a b b"
         "c c d d"
         ". f f .";
  }

  @media (max-width: 425px) {
    grid-template-columns:  1fr;
    grid-template-areas:
         "a"
         "b"
         "c"
         "d"
         "f";
  }

  > :nth-child(1) {
    grid-area: a;
  }

  > :nth-child(2) {
    grid-area: b;
  }

  > :nth-child(3) {
    grid-area: c;
  }

  > :nth-child(4) {
    grid-area: d;
  }

  > :nth-child(5) {
    grid-area: f;
  }
`

export default DirectoryListStyled