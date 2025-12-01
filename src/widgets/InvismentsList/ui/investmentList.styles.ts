import styled, { css } from "styled-components";

export const SContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative;
  min-height: 0;
`;

export const STopTitle = styled.h5`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  z-index: 200;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent 0%, #000000 90%);
  padding: 15px 25px 15px 30px;
  margin-right: -30px;
  margin-left: -30px;
`;

export const STopTitleInWork = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.active.main};
  z-index: 200;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent 0%, #000000 90%);
  padding: 15px 25px 15px 30px;
  margin-right: -30px;
  margin-left: -30px;
`;

export const SList = styled.div`
  display: grid;
  overflow-y: auto;
  overflow-x: hidden;
  touch-action: pan-y;
  overscroll-behavior-x: contain;
  gap: 15px;
  min-height: 0;
  background: rgba(0, 0, 0, 1);

  padding-right: 25px;
  padding-left: 30px;
  margin-right: -30px;
  margin-left: -30px;
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

export const SListCard = styled.div`
  display: grid;
  gap: 15px;
`;

export const STitle = styled.h5<{ $sticky?: boolean }>`
  font-weight: 700;
  height: 20px;
  font-size: 18px;
  text-align: center;
  z-index: ${({ $sticky }) => ($sticky ? 20 : 10)};

  padding-right: 25px;
  padding-left: 30px;
  margin-right: -30px;
  margin-left: -30px;

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      top: 0;
      /* без фона */
      background: transparent;
      box-shadow: none;
      margin-top: -15px;
    `}
`;

export const STitleInWork = styled.h5<{ $sticky?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  font-weight: 700;
  gap: 5px;
  color: #01fb01;
  font-size: 18px;
  text-align: center;
  z-index: ${({ $sticky }) => ($sticky ? 20 : 10)};

  padding-right: 25px;
  padding-left: 30px;
  margin-right: -30px;
  margin-left: -30px;

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      top: 0;
      background: transparent;
      box-shadow: none;
    `}
`;
