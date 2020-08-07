import React from "react";
import styled from "styled-components";
import Button from "components/elements/Button";

function Bid() {
  return (
    <Card>
      <h1 className="title">제목</h1>
      <p className="detail">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
        posuere elit, ut molestie turpis. Sed fermentum bibendum magna, nec
        posuere odio imperdiet at. Sed accumsan orci nec tincidunt maximus...
      </p>
      <div className="price">희망가 0원</div>
      <div className="button">
        <Button className="bid-button" fullWidth>
          입찰 참가
        </Button>
      </div>
    </Card>
  );
}

const Card = styled.div`
  width: 200px;
  margin: 1em;
  padding: 1em;
  background: #f2f2f2;
  border-radius: 0.5em;

  .price {
    font-weight: bold;
    font-size: 1.25em;
    margin-bottom: 1rem;
  }
`;

export default Bid;
