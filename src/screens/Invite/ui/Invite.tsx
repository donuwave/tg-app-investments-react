import { InviteLayout } from "./InviteLayout";
import {
  SFrame,
  SRectangle,
  SInviteTitle,
  SInviteSubtitle,
  SInviteImage,
  SInviteMonImage,
  SInviteDowImage,
  SInviteTopImage,
  SInviteButtonContainer,
  SInviteButton,
  SInviteButtonText,
  SContentInfo,
} from "./invite.styles";
import styled from "styled-components";

const SContent = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 60px 0 120px 0;
`;

import { useTranslation } from "react-i18next";

export const Invite = () => {
  const { t } = useTranslation();

  return (
    <InviteLayout>
      <SContent>
        <SFrame>
          <SRectangle>
            <SInviteTopImage src="/top.png" alt="Top" />
            <SInviteImage src="/chili.png" alt="Chili" />
            <SInviteMonImage />
            <SInviteDowImage src="/dow.png" alt="Dow" />

            <SContentInfo>
              <SInviteTitle>{t("invite.title")}</SInviteTitle>
              <SInviteSubtitle>{t("invite.subtitle")}</SInviteSubtitle>
            </SContentInfo>
          </SRectangle>
        </SFrame>

        <SInviteButtonContainer>
          <SInviteButton>
            <SInviteButtonText>{t("invite.get_link")}</SInviteButtonText>
          </SInviteButton>
        </SInviteButtonContainer>
      </SContent>
    </InviteLayout>
  );
};
