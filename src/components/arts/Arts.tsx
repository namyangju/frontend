import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import Art from "./Art";
import useClient from "hooks/useClient";
function Arts() {
  const client = useClient();
  const { data, isLoading, error } = useQuery("arts", () =>
    client.get("/work?limit=20")
  );
  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <Wrap>
      {data &&
        data.data.data.map((props: any) => <Art key={props._id} {...props} />)}
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
