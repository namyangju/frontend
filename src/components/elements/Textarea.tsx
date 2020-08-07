import styled, { css } from "styled-components";
import { InputProps } from "./Input";

const Textarea = styled.textarea<InputProps>`
  border: 0;
  padding: 1em 1.5em;
  background: #f2f2f2;
  box-sizing: border-box;
  border-radius: 1em;
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 2px 2px 5px -1px ${typeof shadow === "string" ? shadow : "#f2f2f2"};
    `}
    ${({ fullWidth, block }) =>
      (fullWidth || block) &&
      css`
        display: block;
      `}
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
      `}
  :focus {
    outline: 0;
  }
`;

export default Textarea;
