import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import Bid from "./Bid";
import client from "api/client";

function BidList({ query }: { query?: string }) {
  const { data, isLoading } = useQuery("bid_list", () =>
    client.get("/bid?limit=20" + (query ? "&" + query : ""))
  );

  if (isLoading || !data) return <div>Loading...</div>;
  const list = data.data.data;
  return (
    <List>
      {list.map((props: any) => (
        <Bid key={props._id} {...props} />
      ))}
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default BidList;
