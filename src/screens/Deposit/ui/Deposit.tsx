import { MainLayout } from "@shared/components";
import {
  SHeader,
  STitle,
  SProfitContainer,
  SProfitText,
} from "../../Home/ui/homePage.styles";
import { InvestmentPrice } from "@entities/investment";
import { type MouseEventHandler, useState } from "react";
import { Dropdown } from "antd";
import {
  SWalletTitle,
  SSegmentedWallet,
  SAmountSection,
  SAmountLabel,
  SAmountInput,
  SCurrencyButton,
  SCurrencyMenuItem,
  SNetworkCards,
  SNetworkCard,
  SNetworkCardSelected,
  SNetworkImage,
  SNetworkName,
  SNetworkButton,
  SNetworkButtonSelected,
  SCheckIcon,
  SSelectedText,
  SContinueButton,
  SWithdrawalContainer,
  SWithdrawalAmountLabel,
  SWithdrawalInputWrapper,
  SWithdrawalInput,
  SWithdrawalInfo,
  SWithdrawalInfoRow,
  SWithdrawalInfoLabel,
  SWithdrawalInfoValue,
  SWithdrawalAddressContainer,
  SWithdrawalAddressLabel,
  SWithdrawalAddressInput,
  SWithdrawalButton,
  SWithdrawalButtonIcon,
  SWithdrawalWrapper,
  SHistoryContainer,
  SHistoryItem,
  SHistoryIconContainer,
  SHistoryIcon,
  SHistoryContent,
  SHistoryType,
  SHistoryDate,
  SHistoryAmount,
  SHistoryStatus,
  SDepositContent,
  SHistoryIconContainerDeposit,
  SHistoryIconDeposit,
  SHistoryAmountDeposit,
  SHistoryStatusDeposit,
  SHistoryIconContainerCanceled,
  SHistoryIconCanceled,
  SHistoryAmountCanceled,
  SHistoryStatusCanceled,
  SHistoryIconInvestment,
  SHistoryIconInvestmentYellow,
  SHistoryAmountYellow,
  SHistoryStatusYellow,
  SHead,
  SDropDown,
  SLabel,
  SDollar, SContinue, SDeposit, SWithdrawal,
} from "./deposit.styles";
import { SBackdrop } from "../../Profile/ui/profile.styles.ts";
import { ActiveBadge, InactiveBadge } from "@entities/profile";
import { ConclusionIcon } from "@shared/assets/ConclusionIcon.tsx";
import { DepositPaymentIcon } from "@shared/assets/DepositPaymentIcon.tsx";
import { HistoryIcon } from "@shared/assets/HistoryIcon.tsx";
import { ArrowIcons } from "@shared/assets/ArrowIcons.tsx";

export const Deposit = () => {
  const [selectedTab, setSelectedTab] = useState("Депозит");
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum ETH");
  const [amount, setAmount] = useState("0.00");
  const [withdrawalAmount, setWithdrawalAmount] = useState("0.00");
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [currency, setCurrency] = useState("USDT");
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const normalizeAmount = (raw: string) => {
    let v = raw.replace(/[^0-9.]/g, "");

    const parts = v.split(".");
    if (parts.length > 2) {
      v = parts[0] + "." + parts.slice(1).join("");
    }

    if (parts[1]?.length > 2) {
      v = parts[0] + "." + parts[1].slice(0, 2);
    }

    if (parts[0].length > 1 && parts[0].startsWith("0")) {
      parts[0] = String(Number(parts[0])); // "00" -> "0"
      v = parts[1] !== undefined ? `${parts[0]}.${parts[1]}` : parts[0];
    }

    return v;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const withoutPrefix = e.target.value.replace("$", "").trim();
    const normalized = normalizeAmount(withoutPrefix);
    setWithdrawalAmount(normalized);
  };

  const handleBlur = () => {
    if (!withdrawalAmount) {
      setWithdrawalAmount("0.00");
      return;
    }
    const num = parseFloat(withdrawalAmount);
    if (Number.isNaN(num)) {
      setWithdrawalAmount("0.00");
    } else {
      setWithdrawalAmount(num.toFixed(2));
    }
  };

  const networks = [
    { id: "tron", name: "Tron Network", image: "/tron.png" },
    { id: "ethereum", name: "Ethereum ETH", image: "/eth.png", selected: true },
    { id: "bsc", name: "Binanse Smart Chain", image: "/bnb.png" },
  ];

  const items = [
    {
      key: "USDT",
      className: currency === "USDT" ? "currency-selected" : "",
      label: (
        <SCurrencyMenuItem>
          <span>USDT</span>
          {currency === "USDT" ? <ActiveBadge /> : <InactiveBadge />}
        </SCurrencyMenuItem>
      ),
    },
    {
      key: "BTC",
      className: currency === "BTC" ? "currency-selected" : "",
      label: (
        <SCurrencyMenuItem>
          <span>BTC</span>
          {currency === "BTC" ? <ActiveBadge /> : <InactiveBadge />}
        </SCurrencyMenuItem>
      ),
    },
    {
      key: "ETH",
      className: currency === "ETH" ? "currency-selected" : "",
      label: (
        <SCurrencyMenuItem>
          <span>ETH</span>
          {currency === "ETH" ? <ActiveBadge /> : <InactiveBadge />}
        </SCurrencyMenuItem>
      ),
    },
  ];

  const handleInputReset: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <MainLayout>
      <SHeader>
        <div>
          <STitle>Общий баланс</STitle>
          <InvestmentPrice />
        </div>

        <SProfitContainer>
          <SProfitText>
            <ArrowIcons />
            $132 прибыли за 24 часа
          </SProfitText>
        </SProfitContainer>
      </SHeader>

      <SHead>
        <SWalletTitle>Кошелёк</SWalletTitle>
        <SSegmentedWallet
          value={selectedTab}
          onChange={(val) => setSelectedTab(val as string)}
          options={[
            {
              label: (
                <SLabel>
                  <ConclusionIcon />
                  Депозит
                </SLabel>
              ),
              value: "Депозит",
            },
            {
              label: (
                <SLabel>
                  <DepositPaymentIcon />
                  Вывод
                </SLabel>
              ),
              value: "Вывод",
            },
            {
              label: (
                <SLabel>
                  <HistoryIcon />
                  История
                </SLabel>
              ),
              value: "История",
            },
          ]}
        />
      </SHead>

      <SDepositContent>
        {selectedTab === "Депозит" && (
          <SDeposit>
            <SBackdrop visible={isCurrencyDropdownOpen} />

            <SAmountSection>
              <SAmountLabel>Сумма</SAmountLabel>
              <Dropdown
                open={isCurrencyDropdownOpen}
                onOpenChange={(open) => setIsCurrencyDropdownOpen(open)}
                placement="bottomCenter"
                align={{ offset: [0, 30] }}
                menu={{
                  items,
                  selectedKeys: [currency],
                  onClick: ({ key }) => {
                    setCurrency(key);
                    setIsCurrencyDropdownOpen(false);
                  },
                }}
                trigger={["click"]}
              >
                <SDropDown>
                  <SAmountInput
                    onClick={handleInputReset}
                    size="large"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                  />
                  <SCurrencyButton size="large">
                    {currency}
                    <svg
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: "5px" }}
                    >
                      <path
                        d="M1 1L8 8L15 1"
                        stroke="#01FB01"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </SCurrencyButton>
                </SDropDown>
              </Dropdown>
            </SAmountSection>

            <SNetworkCards>
              {networks.map((network) => {
                const isSelected = selectedNetwork === network.name;
                const CardComponent = isSelected
                  ? SNetworkCardSelected
                  : SNetworkCard;
                const ButtonComponent = isSelected
                  ? SNetworkButtonSelected
                  : SNetworkButton;
                return (
                  <CardComponent
                    key={network.id}
                    onClick={() => setSelectedNetwork(network.name)}
                  >
                    <div>
                      <SNetworkImage src={network.image} alt={network.name} />
                      <SNetworkName>{network.name}</SNetworkName>
                    </div>
                    <ButtonComponent>
                      {isSelected ? (
                        <>
                          <SCheckIcon
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM13.3288 6.62119C13.6071 6.89943 13.6071 7.35056 13.3288 7.62881L8.57881 12.3788C8.30057 12.6571 7.84943 12.6571 7.57119 12.3788L5.67119 10.4788C5.39294 10.2006 5.39294 9.74943 5.67119 9.47119C5.94943 9.19294 6.40057 9.19294 6.67881 9.47119L8.075 10.8674L10.1981 8.74428L12.3212 6.62119C12.5994 6.34294 13.0506 6.34294 13.3288 6.62119Z"
                              fill="#01FB01"
                            />
                          </SCheckIcon>
                          <SSelectedText>Выбрано</SSelectedText>
                        </>
                      ) : (
                        "Выбрать"
                      )}
                    </ButtonComponent>
                  </CardComponent>
                );
              })}
            </SNetworkCards>

            <SContinue>
              <SContinueButton size="large" type="primary">
                Продолжить
              </SContinueButton>
            </SContinue>
          </SDeposit>
        )}

        {selectedTab === "Вывод" && (
          <SWithdrawalWrapper>
            <SWithdrawalContainer>
              <SWithdrawalAmountLabel>Сумма</SWithdrawalAmountLabel>
              <SWithdrawalInputWrapper>
                <SDollar>$</SDollar>
                <SWithdrawalInput
                  value={withdrawalAmount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="$ 0.00"
                />
              </SWithdrawalInputWrapper>
              <SWithdrawalInfo>
                <SWithdrawalInfoRow>
                  <SWithdrawalInfoLabel>
                    Доступно для вывода
                  </SWithdrawalInfoLabel>
                  <SWithdrawalInfoValue>$3,213.80</SWithdrawalInfoValue>
                </SWithdrawalInfoRow>
                <SWithdrawalInfoRow>
                  <SWithdrawalInfoLabel>Комиссия</SWithdrawalInfoLabel>
                  <SWithdrawalInfoValue>$0.00</SWithdrawalInfoValue>
                </SWithdrawalInfoRow>
              </SWithdrawalInfo>
            </SWithdrawalContainer>

            <SWithdrawalAddressContainer>
              <SWithdrawalAddressLabel>Адрес кошелька</SWithdrawalAddressLabel>
              <SWithdrawalAddressInput
                size="large"
                value={withdrawalAddress}
                onChange={(e) => setWithdrawalAddress(e.target.value)}
                placeholder="Адрес в сети TRC-20"
              />
            </SWithdrawalAddressContainer>

            <SWithdrawal>
              <SWithdrawalButton size="large" type="primary">
                <SWithdrawalButtonIcon
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM13.3288 6.62119C13.6071 6.89943 13.6071 7.35056 13.3288 7.62881L8.57881 12.3788C8.30057 12.6571 7.84943 12.6571 7.57119 12.3788L5.67119 10.4788C5.39294 10.2006 5.39294 9.74943 5.67119 9.47119C5.94943 9.19294 6.40057 9.19294 6.67881 9.47119L8.075 10.8674L10.1981 8.74428L12.3212 6.62119C12.5994 6.34294 13.0506 6.34294 13.3288 6.62119Z"
                      fill="#01FB01"
                  />
                </SWithdrawalButtonIcon>
                Вывести средства
              </SWithdrawalButton>
            </SWithdrawal>
          </SWithdrawalWrapper>
        )}

        {selectedTab === "История" && (
          <SHistoryContainer>
            <SHistoryItem>
              <SHistoryIconContainer>
                <SHistoryIcon
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2932 17.7639C17.6007 18.0787 18.0993 18.0787 18.4068 17.7639L20.5068 15.6147C20.8144 15.2999 20.8144 14.7896 20.5068 14.4749C20.1993 14.1601 19.7007 14.1601 19.3932 14.4749L18.6375 15.2482V10.7463C18.6375 10.3011 18.2849 9.9403 17.85 9.9403C17.4151 9.9403 17.0625 10.3011 17.0625 10.7463V15.2482L16.3068 14.4749C15.9993 14.1601 15.5007 14.1601 15.1932 14.4749C14.8856 14.7896 14.8856 15.2999 15.1932 15.6147L17.2932 17.7639Z"
                    fill="#FBF301"
                  />
                  <path
                    d="M8.4 0H12.6C16.5598 0 18.5397 0 19.7698 1.259C20.6556 2.1655 20.9036 3.46978 20.973 5.64179H0.0270022C0.096439 3.46978 0.344434 2.1655 1.23015 1.259C2.4603 0 4.4402 0 8.4 0Z"
                    fill="#FBF301"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.4 17.194H12.6C13.2925 17.194 13.9244 17.194 14.5023 17.1873L14.0795 16.7545C13.1568 15.8102 13.1568 14.2793 14.0795 13.3351C14.4739 12.9314 14.9731 12.7003 15.4875 12.6417V10.7463C15.4875 9.41089 16.5452 8.32836 17.85 8.32836C19.1548 8.32836 20.2125 9.41089 20.2125 10.7463V12.6417C20.4475 12.6685 20.6794 12.7313 20.8996 12.8301C21 11.7319 21 10.3551 21 8.59702C21 8.1221 21 7.67502 20.998 7.25373H0.00197956C0 7.67502 0 8.1221 0 8.59702C0 12.6497 0 14.676 1.23015 15.935C2.4603 17.194 4.4402 17.194 8.4 17.194ZM4.2 12.0896C3.76508 12.0896 3.4125 12.4504 3.4125 12.8955C3.4125 13.3406 3.76508 13.7015 4.2 13.7015H8.4C8.83492 13.7015 9.1875 13.3406 9.1875 12.8955C9.1875 12.4504 8.83492 12.0896 8.4 12.0896H4.2ZM11.025 12.0896C10.5901 12.0896 10.2375 12.4504 10.2375 12.8955C10.2375 13.3406 10.5901 13.7015 11.025 13.7015H12.6C13.0349 13.7015 13.3875 13.3406 13.3875 12.8955C13.3875 12.4504 13.0349 12.0896 12.6 12.0896H11.025Z"
                    fill="#FBF301"
                  />
                </SHistoryIcon>
              </SHistoryIconContainer>
              <SHistoryContent>
                <SHistoryType>Вывод</SHistoryType>
                <SHistoryDate>7 нояб. 2025 г. в 20:40</SHistoryDate>
              </SHistoryContent>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <SHistoryAmount>$150</SHistoryAmount>
                <SHistoryStatus>Отправлено</SHistoryStatus>
              </div>
            </SHistoryItem>

            <SHistoryItem>
              <SHistoryIconContainerDeposit>
                <SHistoryIconDeposit
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.7636 11.8724C20.1151 11.5052 20.6849 11.5052 21.0364 11.8724L23.4364 14.3799C23.7879 14.7471 23.7879 15.3425 23.4364 15.7097C23.0849 16.0769 22.5151 16.0769 22.1636 15.7097L21.3 14.8074V20.0597C21.3 20.579 20.8971 21 20.4 21C19.9029 21 19.5 20.579 19.5 20.0597V14.8074L18.6364 15.7097C18.2849 16.0769 17.7151 16.0769 17.3636 15.7097C17.0121 15.3425 17.0121 14.7471 17.3636 14.3799L19.7636 11.8724Z"
                    fill="#01FB01"
                  />
                  <path
                    d="M9.6 0H14.4C18.9255 0 21.1882 0 22.5941 1.46884C23.6064 2.52641 23.8898 4.04808 23.9691 6.58209H0.0308597C0.110216 4.04808 0.393639 2.52641 1.40589 1.46884C2.81178 0 5.07452 0 9.6 0Z"
                    fill="#01FB01"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.6 20.0597H14.4C15.6671 20.0597 16.7568 20.0597 17.7 20.0275V17.8483C17.1121 17.78 16.5416 17.5104 16.0908 17.0394C15.0364 15.9378 15.0364 14.1517 16.0908 13.0501L18.4908 10.5426C19.5452 9.44101 21.2548 9.44101 22.3092 10.5426L23.9925 12.3013C24 11.6112 24 10.8567 24 10.0299C24 9.47579 24 8.95419 23.9977 8.46269H0.00226235C0 8.95419 0 9.47579 0 10.0299C0 14.758 0 17.122 1.40589 18.5909C2.81178 20.0597 5.07452 20.0597 9.6 20.0597ZM3.9 15.0448C3.9 14.5255 4.30294 14.1045 4.8 14.1045H9.6C10.0971 14.1045 10.5 14.5255 10.5 15.0448C10.5 15.5641 10.0971 15.9851 9.6 15.9851H4.8C4.30294 15.9851 3.9 15.5641 3.9 15.0448ZM12.6 14.1045C12.1029 14.1045 11.7 14.5255 11.7 15.0448C11.7 15.5641 12.1029 15.9851 12.6 15.9851H14.4C14.8971 15.9851 15.3 15.5641 15.3 15.0448C15.3 14.5255 14.8971 14.1045 14.4 14.1045H12.6Z"
                    fill="#01FB01"
                  />
                </SHistoryIconDeposit>
              </SHistoryIconContainerDeposit>
              <SHistoryContent>
                <SHistoryType>Депозит</SHistoryType>
                <SHistoryDate>7 нояб. 2025 г. в 20:40</SHistoryDate>
              </SHistoryContent>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <SHistoryAmountDeposit>+$150</SHistoryAmountDeposit>
                <SHistoryStatusDeposit>Получено</SHistoryStatusDeposit>
              </div>
            </SHistoryItem>

            <SHistoryItem>
              <SHistoryIconContainerCanceled>
                <SHistoryIconCanceled
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.7037 0H16.2963C16.6402 0 16.8122 0 16.9572 0.0131751C18.5687 0.159617 19.8463 1.4867 19.9873 3.16054C20 3.31113 20 3.48975 20 3.84699V20.0858C20 21.0456 18.8237 21.4528 18.2692 20.685C17.8846 20.1523 17.1154 20.1523 16.7308 20.685L16.25 21.3508C15.625 22.2164 14.375 22.2164 13.75 21.3508C13.125 20.4852 11.875 20.4852 11.25 21.3508C10.625 22.2164 9.375 22.2164 8.75 21.3508C8.125 20.4852 6.875 20.4852 6.25 21.3508C5.625 22.2164 4.375 22.2164 3.75 21.3508L3.26923 20.685C2.88462 20.1523 2.11538 20.1523 1.73077 20.685C1.17634 21.4528 0 21.0456 0 20.0858V3.84699C0 3.48975 0 3.31113 0.0126844 3.16054C0.153672 1.4867 1.43132 0.159617 3.04281 0.0131751C3.1878 0 3.35977 0 3.7037 0ZM8.36705 6.01664C8.04162 5.69445 7.51398 5.69445 7.18854 6.01664C6.8631 6.33882 6.8631 6.86118 7.18854 7.18336L8.82152 8.80001L7.18856 10.4166C6.86312 10.7388 6.86312 11.2612 7.18856 11.5834C7.514 11.9055 8.04163 11.9055 8.36707 11.5834L10 9.96674L11.633 11.5833C11.9584 11.9055 12.486 11.9055 12.8115 11.5833C13.1369 11.2612 13.1369 10.7388 12.8115 10.4166L11.1785 8.80001L12.8115 7.18338C13.1369 6.8612 13.1369 6.33884 12.8115 6.01665C12.4861 5.69447 11.9584 5.69447 11.633 6.01665L10 7.63328L8.36705 6.01664ZM5 14.025C4.53976 14.025 4.16667 14.3944 4.16667 14.85C4.16667 15.3056 4.53976 15.675 5 15.675H15C15.4602 15.675 15.8333 15.3056 15.8333 14.85C15.8333 14.3944 15.4602 14.025 15 14.025H5Z"
                    fill="#EF4948"
                  />
                </SHistoryIconCanceled>
              </SHistoryIconContainerCanceled>
              <SHistoryContent>
                <SHistoryType>Депозит</SHistoryType>
                <SHistoryDate>7 нояб. 2025 г. в 20:40</SHistoryDate>
              </SHistoryContent>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <SHistoryAmountCanceled>$150</SHistoryAmountCanceled>
                <SHistoryStatusCanceled>Отменено</SHistoryStatusCanceled>
              </div>
            </SHistoryItem>

            <SHistoryItem>
              <SHistoryIconContainerDeposit>
                <SHistoryIconInvestment
                  width="29"
                  height="26"
                  viewBox="0 0 29 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 0C19.2344 2.35685e-07 24.7233 5.32567 24.9883 11.9951C24.5721 11.6857 24.0584 11.5 23.5 11.5C23.4015 11.5 23.3045 11.5065 23.209 11.5176C22.7127 6.03785 18.109 1.74414 12.5 1.74414C6.55973 1.74414 1.74414 6.55973 1.74414 12.5C1.74414 18.4403 6.55973 23.2559 12.5 23.2559C14.2254 23.2559 15.8546 22.8471 17.2998 22.125L18.5518 23.4365C16.7583 24.431 14.696 25 12.5 25C5.59644 25 2.41597e-07 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0ZM12.5 4.65137C12.9816 4.65137 13.3721 5.04179 13.3721 5.52344V5.8916C15.2678 6.23105 16.8602 7.65524 16.8604 9.59277C16.8604 10.0744 16.4699 10.4648 15.9883 10.4648C15.5067 10.4648 15.1162 10.0744 15.1162 9.59277C15.1161 8.80396 14.4602 7.96944 13.3721 7.67188V11.7051C15.2679 12.0445 16.8604 13.4696 16.8604 15.4072C16.8602 17.3448 15.2678 18.769 13.3721 19.1084V19.4766C13.3721 19.9582 12.9816 20.3486 12.5 20.3486C12.0184 20.3486 11.6279 19.9582 11.6279 19.4766V19.1084C9.73216 18.769 8.13979 17.3448 8.13965 15.4072C8.13965 14.9256 8.53008 14.5352 9.01172 14.5352C9.49332 14.5352 9.88379 14.9256 9.88379 15.4072C9.88393 16.196 10.5398 17.0306 11.6279 17.3281V13.2949C9.73208 12.9555 8.13965 11.5304 8.13965 9.59277C8.13978 7.65524 9.73216 6.23105 11.6279 5.8916V5.52344C11.6279 5.04179 12.0184 4.65137 12.5 4.65137ZM13.3721 17.3281C14.4602 17.0306 15.1161 16.196 15.1162 15.4072C15.1162 14.6183 14.4603 13.7829 13.3721 13.4854V17.3281ZM11.6279 7.67188C10.5398 7.96944 9.88393 8.80396 9.88379 9.59277C9.88379 10.3817 10.5397 11.2171 11.6279 11.5146V7.67188Z"
                    fill="#01FB01"
                  />
                  <path
                    d="M23.5 14L23.5 25M23.5 25L28 20.2857M23.5 25L19 20.2857"
                    stroke="#01FB01"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </SHistoryIconInvestment>
              </SHistoryIconContainerDeposit>
              <SHistoryContent>
                <SHistoryType>Инвестиции</SHistoryType>
                <SHistoryDate>7 нояб. 2025 г. в 20:40</SHistoryDate>
              </SHistoryContent>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <SHistoryAmountDeposit>+$150</SHistoryAmountDeposit>
                <SHistoryStatusDeposit>Заработано</SHistoryStatusDeposit>
              </div>
            </SHistoryItem>

            <SHistoryItem>
              <SHistoryIconContainer>
                <SHistoryIconInvestmentYellow
                  width="29"
                  height="25"
                  viewBox="0 0 29 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 0C15.6986 1.1194e-07 18.6154 1.2026 20.8262 3.17871L19.6211 4.44141C17.7241 2.76379 15.2315 1.74414 12.5 1.74414C6.55973 1.74414 1.74414 6.55973 1.74414 12.5C1.74414 18.4403 6.55973 23.2559 12.5 23.2559C16.7799 23.2559 20.4752 20.7558 22.207 17.1367C22.5846 17.3657 23.0262 17.5 23.5 17.5C23.6634 17.5 23.8229 17.4831 23.9775 17.4531C22.0592 21.8924 17.6435 25 12.5 25C5.59644 25 2.41597e-07 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0ZM12.5 4.65137C12.9816 4.65137 13.3721 5.04179 13.3721 5.52344V5.8916C14.7731 6.14246 16.0072 6.9863 16.5566 8.19141C16.4339 8.76754 16.516 9.37675 16.8018 9.9043C16.6763 10.232 16.3601 10.4648 15.9883 10.4648C15.5067 10.4648 15.1162 10.0744 15.1162 9.59277C15.1161 8.80396 14.4602 7.96944 13.3721 7.67188V11.7051C15.2679 12.0445 16.8604 13.4696 16.8604 15.4072C16.8602 17.3448 15.2678 18.769 13.3721 19.1084V19.4766C13.3721 19.9582 12.9816 20.3486 12.5 20.3486C12.0184 20.3486 11.6279 19.9582 11.6279 19.4766V19.1084C9.73216 18.769 8.13979 17.3448 8.13965 15.4072C8.13965 14.9256 8.53008 14.5352 9.01172 14.5352C9.49332 14.5352 9.88379 14.9256 9.88379 15.4072C9.88393 16.196 10.5398 17.0306 11.6279 17.3281V13.2949C9.73208 12.9555 8.13965 11.5304 8.13965 9.59277C8.13978 7.65524 9.73216 6.23105 11.6279 5.8916V5.52344C11.6279 5.04179 12.0184 4.65137 12.5 4.65137ZM13.3721 17.3281C14.4602 17.0306 15.1161 16.196 15.1162 15.4072C15.1162 14.6183 14.4603 13.7829 13.3721 13.4854V17.3281ZM11.6279 7.67188C10.5398 7.96944 9.88393 8.80396 9.88379 9.59277C9.88379 10.3817 10.5397 11.2171 11.6279 11.5146V7.67188Z"
                    fill="#FBF301"
                  />
                  <path
                    d="M23.5 15L23.5 4M23.5 4L19 8.71429M23.5 4L28 8.71429"
                    stroke="#FBF301"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </SHistoryIconInvestmentYellow>
              </SHistoryIconContainer>
              <SHistoryContent>
                <SHistoryType>Инвестиции</SHistoryType>
                <SHistoryDate>7 нояб. 2025 г. в 20:40</SHistoryDate>
              </SHistoryContent>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <SHistoryAmountYellow>-$150</SHistoryAmountYellow>
                <SHistoryStatusYellow>Вложено</SHistoryStatusYellow>
              </div>
            </SHistoryItem>

            <SHistoryItem>
              <SHistoryIconContainerDeposit>
                <SHistoryIconInvestment
                  width="29"
                  height="26"
                  viewBox="0 0 29 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 0C19.2344 2.35685e-07 24.7233 5.32567 24.9883 11.9951C24.5721 11.6857 24.0584 11.5 23.5 11.5C23.4015 11.5 23.3045 11.5065 23.209 11.5176C22.7127 6.03785 18.109 1.74414 12.5 1.74414C6.55973 1.74414 1.74414 6.55973 1.74414 12.5C1.74414 18.4403 6.55973 23.2559 12.5 23.2559C14.2254 23.2559 15.8546 22.8471 17.2998 22.125L18.5518 23.4365C16.7583 24.431 14.696 25 12.5 25C5.59644 25 2.41597e-07 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0ZM12.5 4.65137C12.9816 4.65137 13.3721 5.04179 13.3721 5.52344V5.8916C15.2678 6.23105 16.8602 7.65524 16.8604 9.59277C16.8604 10.0744 16.4699 10.4648 15.9883 10.4648C15.5067 10.4648 15.1162 10.0744 15.1162 9.59277C15.1161 8.80396 14.4602 7.96944 13.3721 7.67188V11.7051C15.2679 12.0445 16.8604 13.4696 16.8604 15.4072C16.8602 17.3448 15.2678 18.769 13.3721 19.1084V19.4766C13.3721 19.9582 12.9816 20.3486 12.5 20.3486C12.0184 20.3486 11.6279 19.9582 11.6279 19.4766V19.1084C9.73216 18.769 8.13979 17.3448 8.13965 15.4072C8.13965 14.9256 8.53008 14.5352 9.01172 14.5352C9.49332 14.5352 9.88379 14.9256 9.88379 15.4072C9.88393 16.196 10.5398 17.0306 11.6279 17.3281V13.2949C9.73208 12.9555 8.13965 11.5304 8.13965 9.59277C8.13978 7.65524 9.73216 6.23105 11.6279 5.8916V5.52344C11.6279 5.04179 12.0184 4.65137 12.5 4.65137ZM13.3721 17.3281C14.4602 17.0306 15.1161 16.196 15.1162 15.4072C15.1162 14.6183 14.4603 13.7829 13.3721 13.4854V17.3281ZM11.6279 7.67188C10.5398 7.96944 9.88393 8.80396 9.88379 9.59277C9.88379 10.3817 10.5397 11.2171 11.6279 11.5146V7.67188Z"
                    fill="#01FB01"
                  />
                  <path
                    d="M23.5 14L23.5 25M23.5 25L28 20.2857M23.5 25L19 20.2857"
                    stroke="#01FB01"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </SHistoryIconInvestment>
              </SHistoryIconContainerDeposit>
              <SHistoryContent>
                <SHistoryType>Партнерка</SHistoryType>
                <SHistoryDate>7 нояб. 2025 г. в 20:40</SHistoryDate>
              </SHistoryContent>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <SHistoryAmountDeposit>+$150</SHistoryAmountDeposit>
                <SHistoryStatusDeposit>Заработано</SHistoryStatusDeposit>
              </div>
            </SHistoryItem>
          </SHistoryContainer>
        )}
      </SDepositContent>
    </MainLayout>
  );
};
