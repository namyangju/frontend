import styled, { FlattenSimpleInterpolation } from "styled-components";

interface PageProps {
  css?: FlattenSimpleInterpolation;
}
const Page = styled.div<PageProps>`
  padding: 5vh 10%;
  ${({ css }) => css}
`;

export default Page;
