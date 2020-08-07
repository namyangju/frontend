import React from "react";
import { css } from "styled-components";
import Page from "components/elements/Page";
import SignUpForm from "components/auth/SignUp";
import { useIsLoginRedirect } from "hooks/useIsLogin";
function SignUpPage() {
  useIsLoginRedirect();
  return (
    <Page css={style}>
      <h1>회원가입</h1>
      <SignUpForm />
    </Page>
  );
}

const style = css`
  max-width: 500px;
  margin: auto;
`;

export default SignUpPage;
