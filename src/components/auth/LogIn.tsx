import React, { useCallback } from "react";
import styled from "styled-components";
import { Formik, FormikHelpers } from "formik";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import { Link } from "react-router-dom";

const initialValues = { email: "", password: "" };
type ValueType = typeof initialValues;

function LogIn() {
  const onSubmit = useCallback(
    (values: ValueType, helper: FormikHelpers<ValueType>) => {},
    []
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
            <Button fullWidth>로그인</Button>
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
