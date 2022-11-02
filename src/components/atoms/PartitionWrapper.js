import styled from "styled-components";

const ListHeaderWrapper = styled.section`
  background: ${({ theme }) => theme.bgColor.accent};
  color: ${({ theme }) => theme.txtColor.accent};
  padding: 13px 20px;
`;

export default ListHeaderWrapper;
