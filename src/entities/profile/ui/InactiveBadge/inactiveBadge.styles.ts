import styled from "styled-components";

export const SInactiveBadge = styled.div`
  border-radius: 16px;
  padding: 6px 10px;
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.main};
`;
