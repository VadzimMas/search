import styled from 'styled-components'
import {adaptiveSize} from '../../../../styled/mixins'

const FormFieldStyled = styled.div`
  position: relative;
  margin: 45px 0;

  .form-input {
    background-color: var(--body-background);
    color: var(--sidebar-text-color);
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid var(--sidebar-text-color);
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      top: -14px;
      font-size: ${adaptiveSize(20, 12)};
      color: var(--sidebar-text-color);
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: var(--sidebar-text-color);
    font-size: ${adaptiveSize(25, 15)};
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
  }
`

export default FormFieldStyled