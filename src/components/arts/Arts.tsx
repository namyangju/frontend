import React from "react";
import styled from "styled-components";
import Art from "./Art";
function Arts() {
  return (
    <Wrap>
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & > * {
    margin: 1em;
  }
`;

export default Arts;
