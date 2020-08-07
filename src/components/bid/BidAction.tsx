import React from "react";
import Button from "components/elements/Button";
import useClient from "hooks/useClient";
import { useSelector } from "react-redux";
import { RootState } from "store";
import BidUsers from "./BidUsers";

function BidAction({ id, refetch, participant, user }: any) {
  const { _id } = useSelector(
    (state: RootState) => state.auth.data || { _id: null }
  );
  const client = useClient();
  const isIn =
    _id &&
    participant
      .map((v: any) => v === _id)
      .reduce((a: any, b: any) => a || b, false);
  const isOwner = user === _id;

  async function invite() {
    try {
      await client.post("/bid/participate/" + id);
      refetch();
    } catch (e) {
      alert("오류가 발생했습니다. 다시 시도하세요.");
    }
  }

  const nonOwnerAction = !isIn ? (
    <Button onClick={invite}>입찰 참여하기</Button>
  ) : (
    "이미 참여하셨습니다."
  );
  const OwnerAction = (
    <BidUsers users={participant} id={id} refetch={refetch} />
  );
  return (
    <div className="bid-actions">{isOwner ? OwnerAction : nonOwnerAction}</div>
  );
}
export default BidAction;
