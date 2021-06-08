import styled from 'styled-components';
import Header from '../atoms/Header';
import Text from '../atoms/Text';
import GoogleLogin from '../molecules/GoogleLogin';
import colors from '../styles/colors';

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeaderBlock = styled.div`
  margin-bottom: 40px;
`

const StyledTextBlock = styled.div`
  margin-top: 40px;
`;

const LoginForm = () => (
  <StyledLoginForm>
    <StyledHeaderBlock>
      <Header fontSize='big' fontWeight='bold'>로그인</Header>
    </StyledHeaderBlock>
    <GoogleLogin />

    <StyledTextBlock>
      <Text
        fontColor={colors.lightGray}
        fontSize='small'
      >Google 계정을 통해 "woowahan-notion"을 사용할 수 있습니다.</Text>
    </StyledTextBlock>

  </StyledLoginForm>
);

export default LoginForm;
