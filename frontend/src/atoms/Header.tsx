import styled from 'styled-components';
import colors from '../styles/colors';

type HeaderFontSize = 'big' | 'medium' | 'small';
type HeaderFontWeight = 'bold' | 'normal' | 'light';

const handleFontSize = (size: HeaderFontSize): string => {
  switch (size) {
    case 'big':
      return '2rem';

    case 'medium':
      return '1.5rem';

    case 'small':
      return '1.25rem';

    // no default
  }
};

const StyledHeader = styled.p<{
  fontSize: HeaderFontSize;
  fontColor: string;
  fontWeight: HeaderFontWeight;
}>`
  font-size: ${(props) => handleFontSize(props.fontSize)};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
`;

type Props = {
  fontSize?: HeaderFontSize;
  fontColor?: string;
  fontWeight?: HeaderFontWeight;
}

const Header: React.FC<Props> = ({
  children,
  fontSize = 'medium',
  fontColor = colors.black,
  fontWeight = 'normal',
}) => (
  <StyledHeader
    fontSize={fontSize}
    fontColor={fontColor}
    fontWeight={fontWeight}
  >
    {children}
  </StyledHeader>
);

export default Header;
