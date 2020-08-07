import React, { useCallback } from "react";
import styled from "styled-components";
import { Formik, FormikHelpers } from "formik";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import { Link, useHistory } from "react-router-dom";
import { login } from "api/auth";
import { useDispatch } from "react-redux";
import authSlice from "store/auth";

const initialValues = { email: "", password: "" };
type ValueType = typeof initialValues;

function LogIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    async (values: ValueType, helper: FormikHelpers<ValueType>) => {
      try {
        const tokens = await login(values);
        dispatch(authSlice.actions.setToken(tokens));
        history.replace("/");
      } catch (e) {
        if (e.code === "LOGIN_FAIL") {
          alert("아이디나 비밀번호가 다릅니다.");
          return;
        }
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    },
    [history, dispatch]
  );
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting, values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <label>
            <span>이메일</span>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              fullWidth
            />
          </label>
          <label>
            <span>비밀번호</span>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              fullWidth
            />
          </label>
          <div className="button">
            <Button fullWidth disabled={isSubmitting}>
              로그인
            </Button>
            <p>
              또는 <Link to="/signup">회원가입</Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form`
  > label {
    display: block;
    margin-bottom: 8px;
  }
  .button {
    text-align: center;
  }
`;
export default LogIn;
