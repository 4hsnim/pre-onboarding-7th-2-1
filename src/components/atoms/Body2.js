import styled from "styled-components";

const Body2 = styled.div`
  ${({ theme }) => theme.fontStyles.body2};
  color: ${({ theme }) => theme.btnColor.default};
`;

export default Body2;
