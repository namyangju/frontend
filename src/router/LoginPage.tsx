import React from "react";
import styled from "styled-components";
import LogIn from "components/auth/LogIn";
import logo from "assets/logo.png";

function IndexPage() {
  return (
    <Wrap>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
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
    img {
      width: 500px;
      height: 140px;
      display: block;
      object-fit: contain;
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
