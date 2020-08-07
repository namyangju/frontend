import React from "react";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import { MdMenu } from "react-icons/md";
import logo from "assets/logo.png";
import Page from "./elements/Page";
import media from "constants/media";
import Modals from "./Modals";
import useModal from "hooks/useModal";
import Search from "./search/Search";

interface LayoutProps {
  children?: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  const menuModal = useModal("menu");

  return (
    <Page css={style}>
      <header className="header">
        <div className="left">
          <Link to="/">
            <div className="logo" role="img" aria-label="logo" />
          </Link>
        </div>
        <div className="right">
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      </header>
      <div className="search-wrap">
        <Search />
      </div>
      <div className="menu-wrap">
        <button className="menu-button" onClick={menuModal.show}>
          <MdMenu />
        </button>
      </div>
      <article className="main">{children}</article>
      <Modals />
    </Page>
  );
}

const style = css`
  padding-top: 24px;

  > .header {
    display: flex;
    align-items: center;
    > .left .logo {
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
    > .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      * {
        margin-right: 1em;
        color: black;
      }
    }
  }
  > .menu-wrap {
    margin-bottom: 1em;
    margin-top: 1.5em;
    margin-left: 24px;
    .menu-button {
      background: none;
      border: 0;
      font-size: 36px;
      cursor: pointer;

      :active,
      :focus {
        outline: 0;
      }
    }
  }
  > .search-wrap {
    margin-top: 1em;
  }
`;
export default Layout;
