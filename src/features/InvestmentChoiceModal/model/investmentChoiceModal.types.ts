import type { InvestmentCard } from "@entities/investment";

export interface IInvestmentChoiceModal {
  investment: InvestmentCard;
  isOpen: boolean;
  onClose: () => void;
  onChoice: (card: InvestmentCard) => void;
}
