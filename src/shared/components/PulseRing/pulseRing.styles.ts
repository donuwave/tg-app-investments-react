import styled, { keyframes } from "styled-components";

export const pulse = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  70% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterDot = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.colors.active.main};
  border-radius: 50%;
  z-index: 3;
`;

export const Ring = styled.div<{ delay: string }>`
  position: absolute;
  width: 22px;
  height: 22px;
  border: 3px solid rgba(0, 255, 0, 0.4);
  border-radius: 50%;
  animation: ${pulse} 2.2s infinite ease-out;
  animation-delay: ${(props) => props.delay || "0s"};
`;
