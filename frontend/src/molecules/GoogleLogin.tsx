import { useCallback } from 'react';
import Button from '../atoms/Button';
import colors from '../styles/colors';
import { API_SERVER } from '../config/endpoint';
import { AiOutlineGoogle } from 'react-icons/ai';
import styled from 'styled-components';

const StyledIconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const GoogleLogin = () => {
  const handleLogin = useCallback(() => {
    window.location.href = `${API_SERVER}/auth/google`
  }, []);

  return (
    <Button
      color={colors.baseRed}
      fontColor={colors.white}
      width='320px'
      height='36px'
      onClick={handleLogin}
    >
      <StyledIconBlock>
        <AiOutlineGoogle size={16} />
      </StyledIconBlock>
  Google로 계속하기
    </Button >
  );
};

export default GoogleLogin;
