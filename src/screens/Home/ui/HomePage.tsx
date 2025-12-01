import { MainLayout, PulseRing } from "@shared/components";
import {
  SButton,
  SHeader,
  SIcon,
  STitle,
  SProfitContainer,
  SProfitText,
  SRightContainer,
} from "./homePage.styles.tsx";
import { InvestmentPrice } from "@entities/investment";
import { InvestmentList } from "@widgets/InvismentsList";
import { useState } from "react";
import { ArrowIcons } from "@shared/assets/ArrowIcons.tsx";

export const HomePage = () => {
  const [hasInWorkInvestments, setHasInWorkInvestments] = useState(false);

  return (
    <MainLayout>
      <SHeader>
        <div>
          <STitle>Общий баланс</STitle>
          <InvestmentPrice />
        </div>

        {hasInWorkInvestments && (
          <SProfitContainer>
            <SProfitText>
              <ArrowIcons />
              $132 прибыли за 24 часа
            </SProfitText>
          </SProfitContainer>
        )}

        <SRightContainer>
          {!hasInWorkInvestments && (
            <>
              <SButton>Депозит</SButton>
              <SIcon>
                <PulseRing />
              </SIcon>
            </>
          )}
        </SRightContainer>
      </SHeader>

      <InvestmentList onInWorkChange={setHasInWorkInvestments} />
    </MainLayout>
  );
};
