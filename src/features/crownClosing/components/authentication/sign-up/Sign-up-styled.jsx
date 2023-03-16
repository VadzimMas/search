import styled from 'styled-components'
import {adaptiveSize} from '../../../../../styled/mixins'

const SignUpStyled = styled.form`

  width: 100%;
  padding: ${adaptiveSize(50, 10)};

  .title {
    font-size: adaptiveSize(40, 25);

  }

  .subtitle {
    font-size: adaptiveSize(30, 20);
  }
`

export default SignUpStyled
