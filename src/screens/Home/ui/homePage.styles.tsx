import styled from "styled-components";
import { Button } from "antd";
import { DepositIcon } from "@shared/assets";

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SRightContainer = styled.div`
  position: relative;
  min-height: 50px;
  display: flex;
  align-items: center;
`;

export const SIcon = styled.div`
  position: absolute;
  top: -5px;
  right: 10px;
  z-index: 10;
  pointer-events: none;

  @media (max-width: 768px) {
    top: -4px;
    right: 8px;
  }

  @media (max-width: 480px) {
    top: -3px;
    right: 6px;
  }
`;

export const STitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
`;

export const SButton = styled(Button).attrs({
  size: "large",
  icon: <DepositIcon />,
})`
  &.ant-btn {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    background: ${({ theme }) => theme.colors.active.secondary};
    color: ${({ theme }) => theme.colors.active.main};
    padding: 0 25px;
    border-radius: 16px;
  }

  & .ant-btn-icon {
    padding-top: 5px;
  }
`;

export const SProfitContainer = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  height: 34px;
  transform: translateY(-50%);
  background: rgba(1, 251, 1, 0.1);
  border-radius: 37px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  padding-left: 16px;
  box-sizing: border-box;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-right: 12px;
    padding-left: 12px;
  }

  @media (max-width: 480px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const SProfitText = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 5px;
  align-items: center;

  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  color: #00ff00;
  white-space: nowrap;
  max-width: 100%;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 16px;
  }
`;
