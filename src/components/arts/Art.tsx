import React from "react";
import styled from "styled-components";
import media from "constants/media";
function Art() {
  return <ArtDiv />;
}

const ArtDiv = styled.div`
  background: gray;
  border-radius: 8px;
  width: 300px;
  height: 300px;

  @media screen and (max-width: 829px) {
    width: 100%;
  }
  @media screen and (max-width: ${media.small}) {
    height: 200px;
  }
`;

export default Art;
