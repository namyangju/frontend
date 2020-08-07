import { useContext, useCallback } from "react";
import { ModalContext } from "components/modal/ModalProvider";

function useModal(modalName: string) {
  const { modal, changeState } = useContext(ModalContext);
  const isShow = !!modal[modalName];
  const close = useCallback(() => {
    changeState(modalName, false);
  }, [changeState, modalName]);
  const show = useCallback(() => {
    changeState(modalName, true);
  }, [changeState, modalName]);
  return { isShow, close, show };
}

export default useModal;
