import styled from 'styled-components';
import colors from '../styles/colors';

const StyledButton = styled.button<{
  color: string;
  fontColor: string;
  width: string;
  height: string;
  fontSize: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 3px;

  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
`;

type Props = {
  onClick?: () => void;
  color?: string;
  fontColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  color = colors.darkerGray,
  fontColor = colors.white,
  width = '200px',
  height = '30px',
  fontSize = '1rem',
}) => (
  <StyledButton
    onClick={onClick}
    color={color}
    fontColor={fontColor}
    width={width}
    height={height}
    fontSize={fontSize}
  >
    {children}
  </StyledButton>
);

export default Button;
