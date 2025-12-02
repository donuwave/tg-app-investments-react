import styled from "styled-components";

export const SFrame = styled.div`
  position: relative;
    display: grid;
    flex: 1;
    border-radius: 20px;
  overflow: hidden;
    max-height: 715px;
    min-height: 100%;
`;

export const SRectangle = styled.div`
  display: grid;
  align-items: end;
  position: relative;
  width: 415px;
  background:
    linear-gradient(
      180deg,
      rgba(17, 18, 19, 0.21) 0%,
      rgba(19, 212, 123, 0.21) 100%
    ),
    #000000;
  border-radius: 20px;
  overflow: visible;
`;

export const SContentInfo = styled.div`
    flex: 1;
    padding-left: 37px;
    padding-bottom: 77px;
    display: grid;
    gap: 20px;
    z-index: 100;
`

export const SInviteTitle = styled.div`
  width: 340px;
  height: 98px;
  padding-bottom: 20px;
  left: calc(50% - 340px / 2 - 0.5px);
  top: 420px;
  font-family: "Dela Gothic One", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 97%;
  color: #ffffff;
  white-space: normal;
  word-wrap: break-word;
`;

export const SInviteSubtitle = styled.div`
  width: 346px;
  height: 56px;
  left: calc(50% - 346px / 2 + 2.5px);
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.8);
  white-space: normal;
  word-wrap: break-word;
`;

export const SInviteImage = styled.img`
  position: absolute;
  width: 506.93px;
  height: 613px;
  left: 39px;
  top: -57px;
  object-fit: contain;
`;

export const SInviteMonImage = styled.div`
  position: absolute;
  width: 340px;
  height: 194px;
  left: 40.98px;
  top: 180px;
  background: url(/1mon.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: none;
`;

export const SInviteDowImage = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 200px;
  height: auto;
  object-fit: contain;
  z-index: 1;
`;

export const SInviteTopImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: auto;
  object-fit: contain;
  z-index: 1;
`;

export const SInviteButtonContainer = styled.div`
  width: 415px;
  height: 66px;
`;

export const SInviteButton = styled.button`
  width: 415px;
  height: 66px;
  left: 0;
  top: 0;
  background: #acfb01;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SInviteButtonText = styled.span`
  font-family: "Geologica", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;
