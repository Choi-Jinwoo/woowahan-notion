import React, { useCallback } from 'react';
import Button from '../atoms/Button';
import colors from '../styles/colors';

const GoogleLogin = () => {
  const handleLogin = useCallback(() => {
    window.location.href = 'http://localhost:3000/api/auth/google';
  }, []);

  return (
    <Button
      color={colors.baseRed}
      fontColor={colors.white}
      onClick={handleLogin}
    >
      Google로 계속하기
    </Button>
  );
};

export default GoogleLogin;
