import styled from "styled-components";

const LargeTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.LargeTitle}
  color: ${({ theme }) => theme.txtColor.default};
`;

export default LargeTitle;
