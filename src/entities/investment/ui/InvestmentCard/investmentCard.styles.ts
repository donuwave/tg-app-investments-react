import styled, { css } from "styled-components";

interface SCardProps {
  $bg: string;
}

export const SCard = styled.div<SCardProps>`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 190px;
  background: ${({ $bg }) => $bg};
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ $bg }) =>
    css`linear-gradient(to bottom, #000000 0 %, ${$bg} 100 %)`};
  transition: border 0.2s ease-in-out;

  &:hover {
    transition: border 0.2s ease-in-out;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.active.main};
  }
`;

export const SInfo = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2px;
`;

export const SHead = styled.div`
  position: relative;
`;

export const STitleCard = styled.h4`
  display: flex;
  gap: 8px;
  align-items: baseline;
  font-family: "Dela Gothic One", serif;
  color: #b3b7b3;
  font-weight: 400;
  font-size: 33px;
`;

export const SCash = styled.span`
  position: absolute;
  top: 33px;
  right: -8px;
  font-family: "Dela Gothic One", serif;
  color: ${({ theme }) => theme.colors.text.main};
  font-weight: 400;
  font-size: 35px;
`;

export const SLine = styled.div`
  display: grid;
  justify-content: end;
  align-items: center;
  column-gap: 15px;
  justify-items: center;
  padding-top: 30px;
  grid-template-columns: 1fr max-content;
`;

export const SApprove = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
`;
