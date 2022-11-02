import styled from "styled-components";

const Body1 = styled.div`
  ${(props) => props.theme.fontStyles.body1};
  color: ${({ theme }) => theme.btnColor.default};
`;

export default Body1;
