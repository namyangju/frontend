import styled, { css } from "styled-components";
import color from "constants/color";

interface ButtonProps {
  block?: boolean;
  fullWidth?: boolean;
}
const Button = styled.button<ButtonProps>`
  ${({ block, fullWidth }) =>
    (block || fullWidth) &&
    css`
      display: block;
    `}
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
      `}
    
    background: ${color.primary};
    color: ${color.isLight(color.primary) ? "black" : "white"};
    font-size: 1rem;
    border: 0;
    padding: .5em 1em;
    border-radius: 1em;

    :focus, :active {
        outline: 0;
    }
`;

export default Button;
