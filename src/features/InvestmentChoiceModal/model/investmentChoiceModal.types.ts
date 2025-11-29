import type {IInvestmentCard} from "@entities/investment";

export interface IInvestmentChoiceModal {
  investment: IInvestmentCard;
  isOpen: boolean;
  onClose: () => void;
  onChoice: (card: IInvestmentCard) => void;
}
