import { ApproveIcon, ArrowIcon, StarIcon } from "@shared/assets";
import type { FC } from "react";
import {
  SCard,
  STitleCard,
  SCash,
  SLine,
  SHead,
  SApprove,
  SInfo,
} from "./investmentCard.styles";
import type {InvestmentCardProps} from "../../model/investmentCardProps.types";


export const InvestmentCard: FC<InvestmentCardProps> = ({
  onClick,
  investment,
}) => {
  return (
    <SCard
      key={investment.id}
      $bg={investment.gradientColor}
      onClick={() => onClick(investment)}
    >
      <img src={investment.src + ".png"} alt={investment.take} />
      <SInfo>
        <SHead>
          <STitleCard>
            {investment.daysText} <ArrowIcon />
          </STitleCard>
          <SCash>{investment.profit}</SCash>
        </SHead>

        <SLine>
          <div>Вложи {investment.invest}</div>
          <StarIcon />
          <div>{investment.time}</div>
          <StarIcon />
          <div>забери {investment.take}</div>
          <SApprove $color={investment.gradientEndColor}>
            <ApproveIcon />
          </SApprove>
        </SLine>
      </SInfo>
    </SCard>
  );
};
