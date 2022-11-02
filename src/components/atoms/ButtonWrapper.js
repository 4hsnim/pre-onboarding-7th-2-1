import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 100%;
  height: 39px;
  padding-left: 4px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColor.default}`};
`;

export default ButtonWrapper;
