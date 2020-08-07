import styled, { FlattenSimpleInterpolation } from "styled-components";
import media from "constants/media";

interface PageProps {
  css?: FlattenSimpleInterpolation;
}
const Page = styled.div<PageProps>`
  padding: 5vh 10%;
  ${({ css }) => css}
  
  @media screen and (max-width: ${media.small}) {
    padding: 24px 16px;
  }
`;

export default Page;
