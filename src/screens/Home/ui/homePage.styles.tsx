import styled from "styled-components";
import { Button } from "antd";
import { DepositIcon } from "@shared/assets";

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const SIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
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
