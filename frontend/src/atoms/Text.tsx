import styled from 'styled-components'
import colors from '../styles/colors';

const handleFontSize = (size: TextFontSize): string => {
  switch (size) {
    case 'big':
      return '1.25rem';

    case 'medium':
      return '1rem';

    case 'small':
      return '0.85rem';

    // no default
  }
};

const StyledText = styled.span<{
  fontColor: string;
  fontSize: TextFontSize;
  fontWeight: TextFontWeight;
}>`
  color: ${props => props.fontColor};
  font-size: ${props => handleFontSize(props.fontSize)};
  font-weight: ${props => props.fontWeight};
`;

type TextFontWeight = 'normal' | 'bold' | 'bolder';
type TextFontSize = 'small' | 'big' | 'medium';

type Props = {
  fontColor?: string;
  fontSize?: TextFontSize;
  fontWeight?: TextFontWeight;
};


const Text: React.FC<Props> = ({
  children,
  fontColor = colors.black,
  fontSize = 'medium',
  fontWeight = 'normal',
}) => {
  return <StyledText
    fontColor={fontColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
  >{children}</StyledText>
};

export default Text;
