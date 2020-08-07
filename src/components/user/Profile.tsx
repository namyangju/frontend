import React from "react";
import styled, { css } from "styled-components";

interface ProfileStyleProps {
  size?: string;
}
function Profile({ ...props }: ProfileStyleProps) {
  return <Wrap role="img" aria-label="profile" {...props}></Wrap>;
}

const Wrap = styled.div<ProfileStyleProps>`
  ${({ size }) => css`
    width: ${size || "76px"};
    height: ${size || "76px"};
    border-radius: ${size || "38px"};
  `}
  background: gray;
`;

export default Profile;
