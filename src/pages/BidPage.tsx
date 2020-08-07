import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import useClient from "hooks/useClient";
import Layout from "components/Layout";
import media from "constants/media";
import BidAction from "components/bid/BidAction";
import BidUserName from "components/bid/BidUserName";

function BidPage({
  match: {
    params: { id },
  },
}: RouteComponentProps<{ id: string }>) {
  const client = useClient();
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["bid", id],
    () => client.get("/bid/" + id)
  );

  if (isError) return <div>Error: {error}</div>;
  if (isLoading || !data) return <div>Loading</div>;

  const {
    title,
    description,
    price,
    phrase,
    selectedUser,
    status,
  } = data.data.data;
  return (
    <Layout>
      {!(status === "resolved" && selectedUser) ? (
        <Contents>
          <div className="info">
            <h1>{title}</h1>
            <h3>{phrase}</h3>
            <div>{description}</div>
            <p>{price}</p>
          </div>
          <BidAction {...data.data.data} refetch={refetch} id={id} />
        </Contents>
      ) : (
        <Contents>
          <p>
            당신은 이제 <BidUserName id={selectedUser} /> 님과 협력할 준비가
            되었습니다.
          </p>
          <p>
            이메일: <BidUserName id={selectedUser} select="userid" />
          </p>
        </Contents>
      )}
    </Layout>
  );
}

const Contents = styled.div`
  display: flex;
  .info {
    flex: 1;
  }

  @media screen and (max-width: ${media.small}) {
    flex-direction: column;
  }
`;

export default BidPage;
