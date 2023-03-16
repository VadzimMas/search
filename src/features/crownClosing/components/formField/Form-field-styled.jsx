import styled from 'styled-components'
import {adaptiveSize} from '../../../../mixins'

const FormFieldStyled = styled.div`
  position: relative;
  margin: 45px 0;

  .form-input {
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      top: -14px;,
    fontSize: ${adaptiveSize(20, 12)},
    color: mainColor,
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: grey;
    font-size: ${adaptiveSize(25, 15)};
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
    @include shrinkLabel();
    }
  }
`

export default FormFieldStyled