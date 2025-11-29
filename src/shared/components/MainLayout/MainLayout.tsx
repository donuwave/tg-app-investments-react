import type { FC, PropsWithChildren } from "react";
import { SContainer, SLayout, SMoney, SPage } from "./mainLayout.styles";
import { Menu } from "@widgets/Menu";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SPage>
      <SLayout>
        <SContainer>{children}</SContainer>
        <SMoney />
        <Menu />
      </SLayout>
    </SPage>
  );
};
