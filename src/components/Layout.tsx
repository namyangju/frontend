import React from "react";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import logo from "assets/logo.png";
import Page from "./elements/Page";
import media from "constants/media";

interface LayoutProps {
  children?: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <Page css={style}>
      <header className="header">
        <div className="left">
          <div className="logo" role="img" aria-label="logo" />
        </div>
        <div className="right">
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      </header>
      <article className="main">{children}</article>
    </Page>
  );
}

const style = css`
  padding-top: 24px;

  .header {
    display: flex;
    align-items: center;
    .logo {
      display: block;
      background: url(${logo}) no-repeat;
      background-size: 100%;
      background-position: center;
      width: 200px;
      height: 60px;

      @media screen and (max-width: ${media.small}) {
        width: 100px;
        height: 30px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      * {
        margin-right: 1em;
        color: black;
      }
    }
  }
`;
export default Layout;
