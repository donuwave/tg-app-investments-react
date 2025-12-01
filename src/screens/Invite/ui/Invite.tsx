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
} from "./invite.styles";
import styled from "styled-components";

const SContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: start;
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
            <SInviteTitle>Приглашай друзей</SInviteTitle>
            <SInviteSubtitle>
              и зарабатывай на реферальной системе !
            </SInviteSubtitle>
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
