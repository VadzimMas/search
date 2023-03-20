import styled from 'styled-components'

export const BaseButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 15px;
  background-color: var(--body-background);
  color: var(--sidebar-text-color);
  border: 1px solid var(--sidebar-text-color);
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  user-select: none;

  @media (hover: hover) {
    &:hover {
      background-color: white;
      color: black;
    }
  }

  &:active {
    background-color: deepskyblue;
    color: black;
  }
`
export const GoogleButton = styled(BaseButton)`
  background-color: deepskyblue;
  color: black;
  @media (hover: hover) {
    &:hover {
      background-color: #0068fd;
      color: white;
    }
  }

  &:active {
    background-color: red;
    color: black;
  }
`
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  @media (hover: hover) {
    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
  }

  &:active {
    background-color: deepskyblue;
    color: black;
  }
`






