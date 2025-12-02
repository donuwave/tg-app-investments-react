import type { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Menu } from "@widgets/Menu";
import { SPage } from "@shared/components/MainLayout/mainLayout.styles.ts";

const SInviteLayout = styled.div`
    position: relative;
    width: 100%;
    max-width: 415px;
    min-height: 100dvh;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #000;
`;

export const InviteLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SPage>
      <SInviteLayout>
        {children}
        <Menu />
      </SInviteLayout>
    </SPage>
  );
};
