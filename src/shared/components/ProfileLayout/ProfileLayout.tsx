import { SContainer, SLayout, SPage } from "./profileLayout.styles.ts";
import type { FC, PropsWithChildren } from "react";
import { Menu } from "@widgets/Menu";

export const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SPage>
      <SLayout>
        <SContainer>{children}</SContainer>
        <Menu />
      </SLayout>
    </SPage>
  );
};
