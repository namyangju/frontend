import React from "react";
import styled from "styled-components";
import LogIn from "components/auth/LogIn";
import logo from "assets/logo.png";
import media from "constants/media";
import { useIsLoginRedirect } from "hooks/useIsLogin";

function IndexPage() {
  useIsLoginRedirect();

  return (
    <Wrap>
      <div className="logo" role="img" aria-label="Logo" />
      <div className="login-wrap">
        <LogIn />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 100%;
    height: 200px;
    display: block;
    background: url(${logo}) no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (max-width: ${media.small}) {
      height: 150px;
    }
  }
  .login-wrap {
    width: 100%;
    padding: 1em;
    max-width: 500px;
    box-sizing: border-box;
  }
`;

export default IndexPage;
