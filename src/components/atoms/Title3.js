import styled from "styled-components";

const Title3 = styled.h1`
  ${({ theme }) => theme.fontStyles.title3}
  color: ${({ theme }) => theme.txtColor.default};
`;

export default Title3;
