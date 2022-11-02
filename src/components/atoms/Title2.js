import styled from "styled-components";

const Title2 = styled.h1`
  ${({ theme }) => theme.fontStyles.title2}
  color: ${({ theme }) => theme.txtColor.default};
`;

export default Title2;
