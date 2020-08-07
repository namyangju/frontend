import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import media from "constants/media";

function MenuModal() {
  return <Modal modalName="menu">{() => <Menu></Menu>}</Modal>;
}

const Menu = styled.div`
  background: white;
  width: 50%;

  @media screen and (max-width: ${media.small}) {
    width: 70%;
  }
`;

export default MenuModal;
