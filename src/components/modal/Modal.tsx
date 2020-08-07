import React from "react";
import styled from "styled-components";
import useModal from "hooks/useModal";

interface ModalProps {
  modalName: string;
  children?: (close: () => void) => React.ReactElement;
}

function Modal({ modalName, children }: ModalProps) {
  const { isShow, close } = useModal(modalName);

  if (!isShow) return null;
  return (
    <Background>
      <div className="close" onClick={close}></div>
      {children && children(close)}
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  & > .close {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default Modal;
