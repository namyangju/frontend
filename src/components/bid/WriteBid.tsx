import React, { useCallback } from "react";
import styled from "styled-components";
import { Formik, FormikHelpers } from "formik";
import Input from "components/elements/Input";
import Textarea from "components/elements/Textarea";
import Button from "components/elements/Button";

const initialValues = { title: "", details: "", price: "" };
type ValueType = typeof initialValues;

function WriteBid() {
  const onSubmit = useCallback(
    (values: ValueType, helper: FormikHelpers<ValueType>) => {},
    []
  );
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting, values, handleSubmit, handleBlur, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <div className="title-wrap">
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="입찰제목"
              fullWidth
            />
          </div>
          <div className="contents">
            <Textarea
              name="details"
              value={values.details}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="세부사항"
              rows={20}
              fullWidth
            />
          </div>
          <div className="price-and-submit">
            <Input
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="희망가"
              style={{ flex: 1 }}
            />
            <Button disabled={isSubmitting}>입찰</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form`
  > .contents,
  > .price-and-submit {
    margin-top: 1.5em;
  }
  > .price-and-submit {
    display: flex;
    button {
      margin-left: 1em;
    }
  }
`;

export default WriteBid;
