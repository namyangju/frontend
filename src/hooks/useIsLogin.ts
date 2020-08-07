import { useSelector } from "react-redux";
import { RootState } from "store";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function useIsLogin() {
  // TODO: Redux 스토어를 통해 로그인 확인 구현
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.auth
  );
  return !!(accessToken && refreshToken);
}

export function useIsLoginRedirect(to: string = "/") {
  const history = useHistory();
  const isLogin = useIsLogin();

  useEffect(() => {
    isLogin && history.replace(to);
  }, [isLogin, history, to]);
}
export function useIsNotLoginRedirect(to: string = "/") {
  const history = useHistory();
  const isLogin = useIsLogin();

  useEffect(() => {
    !isLogin && history.replace(to);
  }, [isLogin, history, to]);
}

export default useIsLogin;
