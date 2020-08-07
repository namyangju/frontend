import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import media from "constants/media";
import Profile from "components/user/Profile";
import { Link } from "react-router-dom";
import BidUserName from "components/bid/BidUserName";
import { useSelector } from "react-redux";
import { RootState } from "store";
import useIsLogin from "hooks/useIsLogin";

function MenuModal() {
  const { _id } = useSelector(
    (state: RootState) => state.auth.data || { _id: "" }
  );
  const isLogin = useIsLogin();

  return (
    <Modal modalName="menu">
      {() => (
        <Menu>
          {isLogin ? (
            <>
              <Link to="/profile" className="profile">
                <Profile size="50px" />
                <h3 className="username">
                  <BidUserName id={_id} />
                </h3>
              </Link>
              <div className="menu-list">
                <Link to="/write" className="menu-item">
                  입찰 등록
                </Link>
                <Link to="/bid" className="menu-item">
                  입찰 보기
                </Link>
                <Link to="/" className="menu-item">
                  디자인 보기
                </Link>
                <Link to="/write-project" className="menu-item">
                  내 프로젝트 업로드
                </Link>
              </div>
            </>
          ) : (
            <div>로그인이 필요합니다.</div>
          )}
        </Menu>
      )}
    </Modal>
  );
}

const Menu = styled.div`
  background: white;
  width: 50%;
  max-width: 480px;
  padding: 1.5em;
  padding-top: 3em;

  .profile {
    display: flex;
    color: black;
    align-items: center;
    .username {
      margin: 0;
      margin-left: 0.75em;
    }
  }
  .menu-list {
    margin-top: 2em;
    .menu-item {
      display: block;
      padding: 1em;
      color: black;
      transition: background 0.5s;
      border-radius: 8px;
      :hover {
        background: #eaeaea;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: ${media.small}) {
    width: 70%;
  }
`;

export default MenuModal;
