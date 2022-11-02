import styled from "styled-components";

const HeaderWrapper = styled.header`
  ${({ theme }) => theme.fontStyles.title2}
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor.default};
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColor.default}`};
`;

export default HeaderWrapper;
