import { SCent, SDollar, SInvestmentPrice } from "./investmentPrice.styles";

export const InvestmentPrice = () => {
  return (
    <SInvestmentPrice>
      <SDollar>$0</SDollar>
      <SCent>.00</SCent>
    </SInvestmentPrice>
  );
};
