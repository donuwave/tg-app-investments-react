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
    SInviteButtonText, SContentInfo,
} from "./invite.styles";
import styled from "styled-components";

const SContent = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 60px 0 120px 0;
`;

export const Invite = () => {
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
              <SInviteTitle>Приглашай друзей</SInviteTitle>
              <SInviteSubtitle>
                и зарабатывай на реферальной системе !
              </SInviteSubtitle>
            </SContentInfo>
          </SRectangle>
        </SFrame>
        <SInviteButtonContainer>
          <SInviteButton>
            <SInviteButtonText>Получить ссылку</SInviteButtonText>
          </SInviteButton>
        </SInviteButtonContainer>
      </SContent>
    </InviteLayout>
  );
};
