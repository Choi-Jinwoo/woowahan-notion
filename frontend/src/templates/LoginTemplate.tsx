import styled from 'styled-components';
import LoginForm from '../organisms/LoginForm';

const StyledLoginTemplate = styled.div`
  margin-top: 40px;
`;

const LoginTemplate = () => (
  <StyledLoginTemplate>
    <LoginForm />
  </StyledLoginTemplate>
)

export default LoginTemplate;