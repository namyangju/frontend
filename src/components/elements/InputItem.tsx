import React from "react";
import styled from "styled-components";
import Input from "./Input";

interface SignUpInputProps {
  fieldName: string;
  name: string;
  type?: string;
  error?: string;
}
function InputItem({
  fieldName,
  name,
  type,
  error,
  ...props
}: SignUpInputProps & Parameters<typeof Input>[0]) {
  return (
    <Wrap>
      <label>
        <span>{fieldName}</span>
        <Input type={type} name={name} fullWidth {...props} />
      </label>
      <div className="error">{error}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  label {
    display: block;
  }
  .error {
    margin-left: 16px;
    margin-top: 4px;
    color: red;
    height: 24px;
    box-sizing: border-box;
  }
  margin-bottom: 1em;
`;

export default InputItem;
