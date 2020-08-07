import React from "react";
import styled from "styled-components";
import Button from "components/elements/Button";
import { useHistory } from "react-router-dom";

interface BidProps {
  title: string;
  description: string;
  price: string;
  _id: string;
}
function Bid({ title, description, price, _id }: BidProps) {
  const history = useHistory();

  return (
    <Card>
      <h1 className="title">{title}</h1>
      <p className="detail">{description} </p>
      <div className="price">희망가 {price}원</div>
      <div className="button">
        <Button
          className="bid-button"
          fullWidth
          onClick={() => history.push("/bid/" + _id)}
        >
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
