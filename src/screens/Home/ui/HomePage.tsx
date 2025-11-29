import { MainLayout, PulseRing } from "@shared/components";
import { SButton, SHeader, SIcon, STitle } from "./homePage.styles.tsx";
import { InvestmentPrice } from "@entities/investment";
import { InvestmentList } from "@widgets/InvismentsList";

export const HomePage = () => {
  return (
    <MainLayout>
      <SHeader>
        <div>
          <STitle>Общий баланс</STitle>
          <InvestmentPrice />
        </div>

        <div>
          <SButton>Депозит</SButton>
          <SIcon>
            <PulseRing />
          </SIcon>
        </div>
      </SHeader>

      <InvestmentList />
    </MainLayout>
  );
};
