import React, { createContext, useState, useCallback } from "react";

type ModalStateType = { [key: string]: boolean };
interface ModalContextType {
  modal: ModalStateType;
  changeState(key: string, value: boolean): void;
}
export const ModalContext = createContext<ModalContextType>({
  modal: {},
  changeState() {},
});
function ModalProvider({ children }: { children?: React.ReactNode }) {
  const [modal, setModal] = useState<ModalStateType>({});
  const changeState = useCallback((key: string, value: boolean) => {
    setModal((modal) => ({
      ...modal,
      [key]: value,
    }));
  }, []);
  return (
    <ModalContext.Provider value={{ modal, changeState }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
