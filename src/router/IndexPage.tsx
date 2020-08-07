import React from "react";
import styled from "styled-components";
import LogIn from "components/auth/LogIn";
import Search from "components/search/Search";

function IndexPage() {
  return (
    <Wrap>
      <div className="logo">로고 들어갈 부분</div>
      <div className="login-wrap">
        <LogIn />
      </div>
      <div className="search-wrap">
        <Search />
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
  .search-wrap {
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    max-width: 500px;
    padding: 0 10%;
    margin: auto;
  }
`;

export default IndexPage;
