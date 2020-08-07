import React from "react";
import styled from "styled-components";
import LogIn from "components/auth/LogIn";

function IndexPage() {
  return (
    <Wrap>
      <div className="logo">로고 들어갈 부분</div>
      <div className="login-wrap">
        <LogIn />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 300px;
    height: 70px;
    background: gray;
  }
  .login-wrap {
    width: 100%;
    padding: 1em;
    max-width: 500px;
    box-sizing: border-box;
  }
`;

export default IndexPage;
