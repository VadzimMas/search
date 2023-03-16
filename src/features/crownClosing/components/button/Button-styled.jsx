import styled from 'styled-components'

const ButtonStyled = styled.button`

  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.google {
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`

export default ButtonStyled




