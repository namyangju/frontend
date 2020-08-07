import React from "react";
import useClient from "hooks/useClient";
import { useQuery } from "react-query";

function BidUserName({
  id,
  select = "nickname",
}: {
  id: string;
  select?: string;
}) {
  const client = useClient();
  const { data, isLoading } = useQuery(["username", id], () =>
    client.get("/user/" + id)
  );

  if (isLoading || !data) return <>로드 중...</>;

  return <>{data.data.data[select]}</>;
}

export default BidUserName;
