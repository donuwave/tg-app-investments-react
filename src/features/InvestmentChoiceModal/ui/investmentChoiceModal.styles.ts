import styled, { css } from "styled-components";
import { Button, Modal } from "antd";

export const SModal = styled(Modal)`
  & .ant-modal-content {
    padding: 0;
    border-radius: 20px;
    display: flex;
    max-height: 700px;
    height: 65dvh;
    flex-direction: column;
  }

  & .ant-modal-body {
    flex: 1;
    padding: 0;
    border-radius: 20px;
    height: 60dvh;
  }

  & .ant-modal-close {
    width: 50px;
    height: 50px;
  }
`;

export const SContent = styled.div<{ $c: string }>`
  position: relative;
  background: ${() =>
    css`linear-gradient(to bottom, ${({ $c }) => $c} 0%, #000000 100%)`};
  border-radius: 20px;
  height: 100%;
`;

export const SInfo = styled.div`
  position: absolute;
  color: white;
  bottom: 40px;
  left: 40px;
  z-index: 5;
`;

export const SAction = styled(Button)<{ $c: string }>`
  position: absolute;
  z-index: 5;
  bottom: -90px;

  &.ant-btn {
    font-family: "Geologica", serif;
    width: 415px;
    height: 80px;
    background: ${({ $c }) => $c};
    color: ${({ theme }) => theme.colors.background.primary};
    border-radius: 20px;
    font-weight: 1000;
    font-size: 17px;
  }

  &.ant-btn-icon {
    display: flex;
  }
`;

export const SCloseIcon = styled(Button)`
  width: 50px;
  height: 50px;
  background: #111213;
  border-radius: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const STitleCard = styled.h4`
  font-family: "Dela Gothic One", serif;
  font-weight: 400;
  font-size: 56px;
`;

export const SCash = styled.span`
  position: absolute;
  top: 55px;
  left: -8px;
  font-family: "Dela Gothic One", serif;
  color: ${({ theme }) => theme.colors.text.main};
  font-weight: 400;
  font-size: 56px;
`;

export const SLine = styled.div`
  display: grid;
  justify-content: end;
  align-items: center;
  column-gap: 15px;
  justify-items: center;
  padding-top: 45px;
  font-size: 24px;
  grid-template-columns: max-content 1fr;
`;

export const SItem = styled.div`
  height: 33px;
  width: 100%;
  align-self: start;
  align-content: start;
`;

export const SItemClose = styled.div`
  width: 100%;
  align-self: start;
  align-content: start;
`;

export const SApprove = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
  align-self: center;
`;

export const SHead = styled.div`
  position: relative;
`;
