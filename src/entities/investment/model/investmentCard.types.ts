export interface IInvestmentCard {
  id: number;
  days: number;
  daysText: string;
  profit: string;
  invest: string;
  take: string;
  time: string;
  gradientColor: string;
  gradientEndColor: string;
  modalColor: string;
  src: string;
}

export interface InvestmentInWorkCard {
  id: number;
  days: number;
  daysText: string;
  profit: string;
  time: string;
  gradientColor: string;
  gradientEndColor: string;
  src: string;
}
