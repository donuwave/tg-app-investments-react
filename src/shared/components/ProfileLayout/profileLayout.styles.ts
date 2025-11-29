import styled from "styled-components";

export const SPage = styled.div`
  position: relative;
  font-family: "Geologica", serif;
  background: ${({ theme }) => theme.colors.background.primary};
  padding: 60px 15px 0 15px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 475px;
  height: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
  overflow: hidden;
`;

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 25px;
  max-width: 415px;
  margin: 0 auto;
  padding-bottom: 130px;
`;
