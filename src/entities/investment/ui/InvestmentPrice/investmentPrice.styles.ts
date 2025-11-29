import styled from "styled-components";

export const SInvestmentPrice = styled.div`
  font-family: "Dela Gothic One", serif;
  display: flex;
  font-size: 50px;
  font-weight: 400;
`;

export const SDollar = styled.div`
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SCent = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
