import React from "react";
import styled from "styled-components";
import media from "constants/media";
import { Link } from "react-router-dom";
function Art({
  _id,
  title,
  image,
}: {
  _id: string;
  title: string;
  image: string;
}) {
  return (
    <ArtLink to={"/project/" + _id} style={{ display: "block" }}>
      <ArtDiv image={image} role="img" aria-label={title} />
    </ArtLink>
  );
}

const ArtDiv = styled.div<{ image: string }>`
  background: url(${({ image }) => image}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  height: 300px;

  @media screen and (max-width: ${media.small}) {
    height: 200px;
  }
`;
const ArtLink = styled(Link)`
  width: 300px;
  @media screen and (max-width: 829px) {
    width: 100%;
  }
`;

export default Art;
