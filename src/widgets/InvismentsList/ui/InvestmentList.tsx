import {
  SList,
  STitle,
  SContainer,
  SBlur,
  STitleInWork,
} from "./investmentList.styles";
import { investments } from "../lib/investments";
import { InvestmentChoiceModal } from "@features/InvestmentChoiceModal";
import { useState } from "react";
import {
  type IInvestmentCard,
  InvestmentCard,
  InvestmentInWordCard,
  type InvestmentInWorkCard,
} from "@entities/investment";
import { TimeIcon } from "@shared/assets";
import {InvestmentDefault} from "../lib/investmentDefault.ts";

export const InvestmentList = () => {
  const [choiceInvestment, setChoiceInvestment] = useState<IInvestmentCard>(InvestmentDefault);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inWorkList, setInWorkList] = useState<InvestmentInWorkCard[]>([]);

  const handleChoiceInvestment = (investment: IInvestmentCard) => {
    setChoiceInvestment(investment);
    setIsOpen(true);
  };

  const handleChoice = (investment: IInvestmentCard) => {
    const inWork: InvestmentInWorkCard = {
      id: investment.id,
      days: investment.days,
      daysText: investment.daysText,
      profit: investment.profit,
      src: investment.src,
      time: investment.time,
      gradientColor: investment.gradientColor,
      gradientEndColor: investment.gradientEndColor,
    };

    setInWorkList((prev) => [...prev, inWork]);
  };

  const isWork = !!inWorkList.length;

  return (
    <SContainer>
      <SBlur />

      <InvestmentChoiceModal
        onChoice={handleChoice}
        onClose={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
        investment={choiceInvestment}
      />

      <SList>
        {isWork && (
          <>
            <STitleInWork $sticky>
              <TimeIcon />
              <span>В работе</span>
            </STitleInWork>

            {inWorkList.map((el) => (
              <InvestmentInWordCard investment={el} />
            ))}
          </>
        )}

        <STitle $sticky>Инвестиции</STitle>

        {investments.map((el) => (
          <InvestmentCard onClick={handleChoiceInvestment} investment={el} />
        ))}
      </SList>
    </SContainer>
  );
};
