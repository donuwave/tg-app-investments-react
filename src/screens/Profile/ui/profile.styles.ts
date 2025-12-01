import styled from "styled-components";
import { Button, Input } from "antd";

export const STitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
`;

export const SWrapperImg = styled.div`
  display: grid;
  justify-content: center;
`;

export const SImg = styled.div`
  position: relative;
`;

export const SIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
`;

export const SForm = styled.form`
  display: grid;
  gap: 20px;
  width: 100%;
  border-radius: 16px;
  padding: 14px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background.secondary};
`;

export const SFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SLabel = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SInput = styled(Input).attrs({
  size: "large",
})`
  &.ant-input {
    font-weight: 500;
    font-size: 18px;

    &::placeholder {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

export const SDropDown = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 66px;
  gap: 8px;

  body:has(&) {
    .ant-dropdown {
      padding: 0 16px;
      min-width: min(100%, calc(425px + (16px * 2))) !important;
    }

    .ant-dropdown-menu {
      background: transparent;
      padding: 0;
      background: ${({ theme }) => theme.colors.background.primary};
      border: 1px solid ${({ theme }) => theme.colors.border};
    }

    & .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected {
      background: linear-gradient(
        90deg,
        rgba(12, 13, 12, 1) 0%,
        rgba(2, 48, 2, 1) 100%
      );
    }

    .ant-dropdown-menu-item {
      padding: 0;
      background: ${({ theme }) => theme.colors.background.primary};
    }

    .ant-dropdown-menu-title-content {
      color: ${({ theme }) => theme.colors.text.main};
      padding: 15px;
    }
  }
`;

export const SInputDropdown = styled(Input)`
  &.ant-input-outlined {
    &:hover,
    &:active,
    &:focus {
      cursor: default;
      border-color: transparent;
      box-shadow: none;
    }
  }
`;

export const SBackdrop = styled.div<{ visible: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  transition: opacity 0.4s ease;
  z-index: 1000;
`;

export const SActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  width: 100%;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

export const SAction = styled(Button)`
  background: ${({ theme }) => theme.colors.background.secondary};

  &.ant-btn {
    gap: 25px;
    height: 60px;

    & > span {
      font-weight: 500;
    }
  }

  @media (max-width: 395px) {
    &.ant-btn {
      gap: 15px;
    }
  }
`;

export const SChangePassword = styled(Button).attrs({
  size: "large",
})`
  width: 100%;
  font-weight: 700;
  font-size: 20px;
`;

export const SLabelDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`;
