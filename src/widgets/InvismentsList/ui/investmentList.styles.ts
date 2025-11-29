import styled, { css } from "styled-components";

export const SContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative;
  min-height: 0;
`;

export const SBlur = styled.div`
  position: absolute;
  inset: 0;
  height: 90px;
  background: black;
  filter: blur(10px);
  pointer-events: none;
  width: 100vw;
  margin-left: calc(50% - 51vw);
  margin-right: calc(50% - 50vw);
`;

export const SList = styled.div`
  display: grid;
  overflow-y: auto;
  gap: 15px;
  min-height: 0;

  padding-right: 15px;
  padding-left: 15px;
  margin-right: -19px;
  margin-left: -15px;
  padding-bottom: 135px;
  z-index: 100;

  @media (max-width: 375px) {
    padding-bottom: 115px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 999px;
  }
`;

export const STitle = styled.h5<{ $sticky?: boolean }>`
  font-weight: 700;
  height: 70px;
  padding: 20px 0;
  font-size: 18px;
  text-align: center;
  z-index: ${({ $sticky }) => ($sticky ? 20 : 10)};

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      top: 0;
      background: ${({ theme }) => theme.colors.background.primary};
    `}
`;

export const STitleInWork = styled.h5<{ $sticky?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  gap: 5px;
  padding: 20px 0;
  color: #01fb01;
  font-size: 18px;
  text-align: center;
  z-index: ${({ $sticky }) => ($sticky ? 20 : 10)};

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      top: -5px;
      background: ${({ theme }) => theme.colors.background.primary};
    `}
`;
