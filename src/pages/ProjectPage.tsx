import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import useClient from "hooks/useClient";
import Layout from "components/Layout";
import Arts from "components/arts/Arts";

function ProjectPage({
  match: {
    params: { id },
  },
}: RouteComponentProps<{ id: string }>) {
  const client = useClient();
  const { data, error, isLoading } = useQuery(["project", id], () =>
    client.get("/work/" + id)
  );

  if (isLoading || !data) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { title, image, description } = data.data.data;
  return (
    <Layout>
      <ArtSection>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="info">
          <h1 className="title">{title}</h1>
          <div className="description">{description}</div>
        </div>
      </ArtSection>
      <Arts />
    </Layout>
  );
}

const ArtSection = styled.section`
  .image {
    img {
      width: 100%;
      height: auto;
    }
  }
`;
export default ProjectPage;
