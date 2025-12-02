import styled, { createGlobalStyle } from "styled-components";
import { Segmented, Button, Input } from "antd";

export const SWalletTitle = styled.h5`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin: 0;
  padding-bottom: 16px;
`;

export const SHead = styled.div`
    background: linear-gradient(to bottom, transparent 0%, #000000 90%);
    padding: 15px 30px;
    margin-right: -30px;
    margin-left: -30px;
`;

export const SLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
`;

export const SSegmentedWallet = styled(Segmented)`
  width: 415px;
  height: 66px;
  margin: 0 auto;
  box-sizing: border-box;

  &.ant-segmented {
    border: 1px solid rgba(255, 255, 255, 0.09);
    padding: 5px;
    border-radius: 20px;
    background: #0f1011;
    height: 66px;
  }

  & .ant-segmented-item {
    border-radius: 15px;
    flex: 1;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  & .ant-segmented-thumb {
    border-radius: 16px;
    background: #3c3d40;
  }

  & .ant-segmented-item-selected {
    background: #3c3d40;
    border-radius: 15px;
    width: 138px;
    height: 56px;
    color: white;
  }

  & .ant-segmented-item-label {
    width: 96px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;

export const SAmountSection = styled.div`
  width: 415px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #0f1011;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 26px;
  padding: 16px 20px 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SAmountLabel = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SDropDown = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 101px;
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

export const SAmountInputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SAmountInput = styled(Input)`
  height: 66px;
  box-sizing: border-box;

  &.ant-input {
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 20px;
    font-family: "Geologica", serif;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 20px;
  }
`;

export const SCurrencyButton = styled(Button)`
  width: 101px;
  height: 65px;
  box-sizing: border-box;

  &.ant-btn {
    background: rgba(1, 251, 1, 0.1);
    border: none;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #01fb01;
  }
`;

export const SCurrencyDropdown = styled.div`
  display: inline-block;
`;

export const SCurrencyMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SCurrencySelectedBadge = styled.div`
  position: absolute;
  width: 105px;
  height: 31px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 139, 0, 0.2);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #01fb01;
`;

export const SCurrencySelectBadge = styled.div`
  position: absolute;
  width: 83px;
  height: 31px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff17;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const CurrencyDropdownStyles = createGlobalStyle`
  .currency-dropdown {
    .ant-dropdown-menu {
      box-sizing: border-box;
      width: 425px !important;
      min-height: 152px;
      background: rgba(0, 0, 0, 0.84) !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
      box-shadow: 0px 4px 12.9px rgba(0, 0, 0, 0.69) !important;
      backdrop-filter: blur(7px);
      border-radius: 20px !important;
      padding: 0 !important;
    }

    .ant-dropdown-menu-item {
      position: relative;
      width: 432px;
      height: 76px;
      background: #000000D6 !important;
      border: none !important;
      border-radius: 0;
      padding: 0 20px !important;
      display: flex;
      align-items: center;
      color: white !important;
      font-size: 16px;
      margin: 0 !important;

      &:first-child {
        border-radius: 20px 20px 0 0;
      }

      &:last-child {
        border-radius: 0 0 20px 20px;
      }

      &:hover {
        background: #000000D6 !important;
      }
    }

    .ant-dropdown-menu-item-selected,
    .ant-dropdown-menu-item.currency-selected {
      background: linear-gradient(90deg, rgba(1, 251, 1, 0) 0%, rgba(1, 251, 1, 0.2) 100%) !important;
    }
  }
`;

export const SNetworkCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 415px;
  margin-left: auto;
  margin-right: auto;
`;

export const SNetworkCard = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 126px;
  background: #0f1011;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 26px;
  padding: 17px 19px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const SNetworkCardSelected = styled(SNetworkCard)`
  background:
    linear-gradient(90deg, rgba(1, 251, 1, 0) 0%, rgba(1, 251, 1, 0.2) 100%),
    #0f1011;
  border: 1px solid #01fb01;
`;

export const SNetworkImage = styled.img`
  position: absolute;
  width: 138px;
  height: 138px;
  right: -30px;
  top: 18px;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
`;

export const SNetworkName = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  width: 120px;
  position: relative;
  z-index: 1;
`;

export const SNetworkButton = styled(Button)`
  width: 83px;
  height: 31px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  &.ant-btn {
    background: rgba(255, 255, 255, 0.09);
    border: none;
    border-radius: 25px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

export const SNetworkButtonSelected = styled(SNetworkButton)`
  width: 105px;
  position: relative;

  &.ant-btn {
    background: #0c290e;
    color: #01fb01 !important;
    position: relative;

    &:hover,
    &:active,
    &:focus {
      color: #01fb01 !important;
    }
  }
`;

export const SCheckIcon = styled.svg`
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
  margin-left: -2px;
`;

export const SSelectedText = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #01fb01;
  display: inline-block;
  vertical-align: middle;
`;

export const SContinue = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
    background: transparent;
    margin: 0 auto;
    max-width: 475px;
    padding: 0 30px;
    bottom: 130px;
    width: 100%;
    display: grid;
`

export const SContinueButton = styled(Button)`
  &.ant-btn {
    background: #001900;
    color: ${({ theme }) => theme.colors.active.main};
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 16px;
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

export const SWithdrawalContainer = styled.div`
  box-sizing: border-box;
  background: #0f1011;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 26px;
  padding: 20px;
  position: relative;
`;

export const SWithdrawalAmountLabel = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 15px;
`;

export const SWithdrawalInputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`;

export const SDollar = styled.span`
  position: absolute;
  top: 14px;
  left: 12px;
  z-index: 20;
  color: rgba(255, 255, 255, 0.5);
  font-size: 26px;
`;

export const SWithdrawalInput = styled(Input)`
  width: 100%;
  height: 66px;
  box-sizing: border-box;

  &.ant-input {
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 20px !important;
    font-family: "Geologica", serif;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 35px;
  }
`;

export const SWithdrawalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SWithdrawalInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SWithdrawalInfoLabel = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

export const SWithdrawalInfoValue = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  color: #ffffff;
`;

export const SWithdrawalAddressContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  background: #0f1011;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 26px;
  padding: 20px;
  position: relative;
`;

export const SWithdrawalAddressLabel = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 15px;
`;

export const SWithdrawalAddressInput = styled(Input)`
  width: 100%;
  height: 66px;
  box-sizing: border-box;

  &.ant-input {
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 20px;
    font-family: "Geologica", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    padding: 0 20px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const SWithdrawalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 205px;
`;

export const SWithdrawal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1020;
    background: transparent;
    margin: 0 auto;
    max-width: 475px;
    padding: 0 30px;
    bottom: 130px;
    width: 100%;
    display: grid;
`

export const SWithdrawalButton = styled(Button)`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &.ant-btn {
    background: #011a01;
    border: none;
    border-radius: 20px;
    font-family: "Geologica", serif;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #01fb01;
    padding: 0;
  }
`;

export const SWithdrawalButtonIcon = styled.svg`
  width: 19px;
  height: 19px;
  flex-shrink: 0;
`;

export const SDeposit = styled.div`
  display: grid;
  gap: 15px;
  padding-bottom: 205px;
`

export const SDepositContent = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background.primary};
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: -30px;
  margin-left: -30px;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 999px;
  }
`;

export const SHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
    padding-bottom: 120px;
`;

export const SHistoryItem = styled.div`
  box-sizing: border-box;
  width: 415px;
  height: 82px;
  margin: 0 auto 15px;
  background: #0f1011;
  border-radius: 26px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;

export const SHistoryIconContainer = styled.div`
  width: 66px;
  height: 66px;
  background: rgba(251, 243, 1, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const SHistoryIcon = styled.svg`
  width: 21px;
  height: 18px;
`;

export const SHistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const SHistoryType = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 22px;
  color: #ffffff;
`;

export const SHistoryDate = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.5);
`;

export const SHistoryAmount = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 22px;
  text-align: right;
  color: #fbf301;
`;

export const SHistoryStatus = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #fbf301;
  margin-top: 4px;
`;

export const SHistoryIconContainerDeposit = styled.div`
  width: 66px;
  height: 66px;
  background: rgba(1, 251, 1, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const SHistoryIconDeposit = styled.svg`
  width: 24px;
  height: 21px;
`;

export const SHistoryAmountDeposit = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 22px;
  text-align: right;
  color: #01fb01;
`;

export const SHistoryStatusDeposit = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #01fb01;
  margin-top: 4px;
`;

export const SHistoryIconContainerCanceled = styled.div`
  width: 66px;
  height: 66px;
  background: rgba(239, 73, 72, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const SHistoryIconCanceled = styled.svg`
  width: 20px;
  height: 22px;
`;

export const SHistoryAmountCanceled = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 22px;
  text-align: right;
  color: #ef4948;
`;

export const SHistoryStatusCanceled = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #ef4948;
  margin-top: 4px;
`;

export const SHistoryIconInvestment = styled.svg`
  width: 29px;
  height: 26px;
`;

export const SHistoryIconInvestmentYellow = styled.svg`
  width: 29px;
  height: 25px;
`;

export const SHistoryAmountYellow = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 22px;
  text-align: right;
  color: #fbf301;
`;

export const SHistoryStatusYellow = styled.div`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #fbf301;
  margin-top: 4px;
`;
