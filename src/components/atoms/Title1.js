import styled from "styled-components";

const Title1 = styled.h1`
  ${({ theme }) => theme.fontStyles.title1}
  color: ${({ theme }) => theme.txtColor.default};
`;

export default Title1;
