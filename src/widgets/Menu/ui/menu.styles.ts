import styled, { css } from "styled-components";
import { Button, Segmented } from "antd";

export const SMenu = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: transparent;
  margin: 0 auto;
  max-width: 475px;
  padding: 0 30px;

  background: ${() =>
    css`linear-gradient(to bottom, transparent 0%, #000000 60%)`};
`;

export const SContent = styled.nav`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  gap: 17px;
  padding-bottom: 30px;
`;

export const SButtonMenu = styled(Button)`
  &.ant-btn {
    display: grid;
    height: 80px;
    width: 100%;
    border-radius: 21px;
    background: ${({ theme }) => theme.colors.background.secondary};

    &.ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled) {
      &:hover,
      &:active,
      &:focus {
        border-color: transparent;
      }
    }
  }

  @media (max-width: 375px) {
    &.ant-btn {
      height: 60px;
    }
  }
`;

export const SSegmented = styled(Segmented)`
  &.ant-segmented {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 5px;
    border-radius: 21px;
  }

  & .ant-segmented-thumb {
    border-radius: 16px;
  }

  & .ant-segmented-item-label {
    height: 68px;
    width: 68px;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  & .ant-segmented-item-selected {
    border-radius: 16px;
  }

  & .ant-segmented-item {
    border-radius: 16px;
  }
`;
