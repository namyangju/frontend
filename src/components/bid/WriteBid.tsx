import React, { useCallback } from "react";
import styled from "styled-components";
import { Formik, FormikHelpers } from "formik";
import Input from "components/elements/Input";
import Textarea from "components/elements/Textarea";
import Button from "components/elements/Button";
import useClient from "hooks/useClient";
import { useHistory } from "react-router-dom";

const initialValues = { title: "", letter: "", details: "", price: "" };
type ValueType = typeof initialValues;

function WriteBid() {
  const client = useClient();
  const history = useHistory();

  const onSubmit = useCallback(
    async (
      { title, price, details, letter }: ValueType,
      helper: FormikHelpers<ValueType>
    ) => {
      if (!title || !price || !details || !letter) return;

      try {
        const req = await client.post("/bid", {
          title,
          description: details,
          price,
          phrase: letter,
        });
        const id = req.data.data._id;

        history.push("/bid/" + id);
      } catch (e) {
        console.error(e);
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    },
    [client, history]
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
          <div className="letter">
            <Input
              name="letter"
              value={values.letter}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="쓸 글씨"
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
  > .letter {
    margin-top: 1em;
  }
`;

export default WriteBid;
