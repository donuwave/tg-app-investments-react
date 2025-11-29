import type {IInvestmentCard} from "@entities/investment";

export interface InvestmentCardProps {
    onClick: (investment: IInvestmentCard) => void;
    investment: IInvestmentCard;
}
