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
import { ArrowIcons } from "@shared/assets";

import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();
  const [hasInWorkInvestments, setHasInWorkInvestments] = useState(false);

  return (
    <MainLayout>
      <SHeader>
        <div>
          <STitle>{t("home.balance")}</STitle>
          <InvestmentPrice />
        </div>

        {hasInWorkInvestments && (
          <SProfitContainer>
            <SProfitText>
              <ArrowIcons />
              $132 {t("home.profit_24h")}
            </SProfitText>
          </SProfitContainer>
        )}

        <SRightContainer>
          {!hasInWorkInvestments && (
            <>
              <SButton>{t("home.deposit")}</SButton>
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
