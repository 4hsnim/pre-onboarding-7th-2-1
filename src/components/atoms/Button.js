import styled, { css } from "styled-components";

const Button = styled.button`
  width: 4rem;
  height: 27px;
  border-radius: 4rem;
  border: none;
  background-color: ${({ theme }) => theme.btnColor.default};
  color: ${({ theme }) => theme.txtColor.default};
  ${({ theme }) => theme.fontStyles.button1}
  cursor: pointer;

  ${({ filtered }) =>
    filtered &&
    css`
      background-color: ${({ theme }) => theme.btnColor.filtered};
      color: ${({ theme }) => theme.txtColor.accent};
    `}

  ${({ recent }) =>
    recent &&
    css`
      width: 3.3rem;
      background-color: ${({ theme }) => theme.btnColor.accent};
      color: ${({ theme }) => theme.txtColor.accent};
      ${({ theme }) => theme.fontStyles.button2}
      cursor: default;
    `}
`;

export default Button;
