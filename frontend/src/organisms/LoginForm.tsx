import React from 'react';
import styled from 'styled-components';
import Header from '../atoms/Header';
import GoogleLogin from '../molecules/GoogleLogin';

const StyledLoginForm = styled.div`
`;

const LoginForm = () => (
  <StyledLoginForm>
    <Header fontSize='big'>로그인</Header>
    <GoogleLogin />
  </StyledLoginForm>
);

export default LoginForm;
