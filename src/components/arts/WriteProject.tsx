import React, { useCallback } from "react";
import { Formik, FormikHelpers } from "formik";
import styled from "styled-components";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import Textarea from "components/elements/Textarea";
import useClient from "hooks/useClient";
import { useHistory } from "react-router-dom";

const initialValues: { title: string; details: string; image: File | null } = {
  title: "",
  details: "",
  image: null,
};
type ValueType = typeof initialValues;
function WriteProject() {
  const history = useHistory();
  const client = useClient();
  const onSubmit = useCallback(
    async (values: ValueType, helper: FormikHelpers<ValueType>) => {
      if (!values.title || !values.image || !values.details) {
        return;
      }
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.details);
      formData.append("image", values.image);

      try {
        const req = await client.post("/work", formData);
        const id = req.data.data._id;

        history.push("/projects/" + id);
      } catch (e) {
        console.error(e);
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    },
    [client, history]
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({
        isSubmitting,
        values,
        setFieldValue,
        handleSubmit,
        handleBlur,
        handleChange,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="title-wrap">
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="내 프로젝트 제목"
              fullWidth
            />
          </div>
          <div className="file">
            <input
              type="file"
              name="image"
              onChange={(e) =>
                e.currentTarget.files &&
                setFieldValue("image", e.currentTarget.files[0])
              }
              accept="image/*"
            />
          </div>
          <div className="details">
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
          <div className="submit">
            <Button disabled={isSubmitting}>저장</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form`
  .details,
  .file {
    margin-top: 1em;
  }
`;

export default WriteProject;
