import styled from "styled-components";
import { TimeBgIcon } from "@shared/assets";

export const STimerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: end;
`;

export const STimerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #b8bfb9;
`;

export const STimerBg = styled(TimeBgIcon)`
  position: absolute;
  top: 20px;
  left: 0;
  width: 181px;
  height: 66px;
  pointer-events: none;
  filter: blur(20px);
`;

export const STimerContent = styled.div`
  position: absolute;
  top: 37px;
  left: -1px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const SBlock = styled.div`
  min-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SValue = styled.span`
  font-family: "Dela Gothic One", serif;
  width: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SLabel = styled.span`
  margin-top: 2px;
  font-size: 11px;
  opacity: 0.85;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SColon = styled.span`
  font-family: "Dela Gothic One", serif;
  font-size: 26px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.main};
`;
