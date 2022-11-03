import styled from "styled-components";

const CarItemWrapper = styled.section`
  padding: 24px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `1px solid ${theme.txtColor.default}`};
`;

export default CarItemWrapper;
