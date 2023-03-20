import styled from 'styled-components'
import {adaptiveSize} from '../../../../../styled/mixins'

const SignInStyled = styled.form`

  width: 100%;
  padding: ${adaptiveSize(50, 10)};
  color: var(--sidebar-text-color);

  .title {
    font-size: ${adaptiveSize(40, 25)};
  }

  .subtitle {
    font-size: ${adaptiveSize(30, 20)};
  }

  .forms {
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & button {
      width: 49%;
    }

    @media (max-width: 768px) {
      justify-content: unset;
      & button {
        width: 100%;
        margin: 1vw 0;
      }
    }
  }
`

export default SignInStyled