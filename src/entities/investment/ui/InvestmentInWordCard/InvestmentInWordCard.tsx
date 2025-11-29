import type { FC } from "react";
import {
  SCard,
  SInfo,
  STitleCard,
  SCash,
  SHead,
} from "./investmentInWorkCard.styles";
import { CountdownTimer } from "@shared/components";
import { ArrowIcon } from "@shared/assets";
import type {IInvestmentInWordCard} from "../../model/investmentInWordCard.types";

export const InvestmentInWordCard: FC<IInvestmentInWordCard> = ({
  investment,
}) => {
  const targetDate = Date.now() + +investment.days * 24 * 60 * 60 * 1000;

  return (
    <SCard
      key={`work-${investment.id}`}
      $bg={investment.gradientColor}
      onClick={() => {}}
    >
      <img src={investment.src + ".png"} alt={investment.src} />

      <SInfo>
        <SHead>
          <STitleCard>
            {investment.daysText} <ArrowIcon />
          </STitleCard>
          <SCash>{investment.profit}</SCash>
        </SHead>

        <CountdownTimer targetDate={targetDate} />
      </SInfo>
    </SCard>
  );
};
