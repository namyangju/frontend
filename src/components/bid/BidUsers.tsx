import React from "react";
import styled from "styled-components";
import BidUserName from "./BidUserName";
import Button from "components/elements/Button";
import useClient from "hooks/useClient";

function BidUsers({
  id,
  users,
  refetch,
}: {
  id: string;
  users: string[];
  refetch: any;
}) {
  const client = useClient();
  function bidIn(user: string) {
    return async () => {
      try {
        await client.patch("/bid/" + id, { worker: user });
        refetch();
      } catch (e) {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
        console.error(e);
      }
    };
  }
  return (
    <List>
      {users.map((v) => (
        <div className="user-item" key={v}>
          <BidUserName id={v} />
          <Button style={{ marginLeft: 8 }} onClick={bidIn(v)}>
            낙찰
          </Button>
        </div>
      ))}
    </List>
  );
}

const List = styled.div`
  .user-item {
    padding: 1em;
  }
`;

export default BidUsers;
