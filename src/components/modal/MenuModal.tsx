import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import media from "constants/media";
import Profile from "components/user/Profile";

function MenuModal() {
  return (
    <Modal modalName="menu">
      {() => (
        <Menu>
          <div className="profile">
            <Profile size="50px" />
            <h3 className="username">Username</h3>
          </div>
          <div className="menu-list">
            <div className="menu-item">입찰 등록</div>
            <div className="menu-item">입찰 보기</div>
            <div className="menu-item">디자인 보기</div>
          </div>
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
