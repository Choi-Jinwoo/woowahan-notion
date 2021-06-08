import styled from 'styled-components';
import LoginForm from '../organisms/LoginForm';

const StyledLoginTemplate = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 5px;
`;

const LoginTemplate = () => (
  <StyledLoginTemplate>
    <LoginForm />
  </StyledLoginTemplate>
)

export default LoginTemplate;