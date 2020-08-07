import React, { useCallback } from "react";
import styled from "styled-components";
import { Formik, FormikHelpers } from "formik";
import InputItem from "components/elements/InputItem";
import Button from "components/elements/Button";

const initialValues = {
  email: "",
  password: "",
  passwordAccept: "",
  username: "",
};
type ValueType = typeof initialValues;

function SignUp() {
  const onSubmit = useCallback(
    (values: ValueType, helper: FormikHelpers<ValueType>) => {},
    []
  );
  const validate = useCallback(
    ({ email, password, passwordAccept }: ValueType, props: any) => {
      const errors: any = {};
      if (password && passwordAccept && password !== passwordAccept) {
        errors.passwordAccept = "비밀번호를 다시 확인해주세요.";
      }
      if (
        !email.match(
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        )
      )
        errors.email = "이메일이 형식에 맞지 않습니다.";
      return errors;
    },
    []
  );
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate as any}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <InputItem
            fieldName="이메일"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            value={values.email}
          />
          <InputItem
            fieldName="비밀번호"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            value={values.password}
          />
          <InputItem
            fieldName="비밀번호 확인"
            name="passwordAccept"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.passwordAccept}
            value={values.passwordAccept}
          />
          <InputItem
            fieldName="닉네임"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.username}
            value={values.username}
          />
          <Button fullWidth disabled={isSubmitting}>
            회원가입
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form``;

export default SignUp;
