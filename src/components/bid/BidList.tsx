import React from "react";
import styled from "styled-components";
import Bid from "./Bid";

function BidList() {
  return (
    <List>
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
      <Bid />
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default BidList;
