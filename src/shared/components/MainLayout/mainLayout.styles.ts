import styled from "styled-components";

export const SPage = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  font-family: "Geologica", serif;
  background-color: #000;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 475px;
  height: 100vh;
  margin: 0 auto;

  background-image: url("/layout.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 150%;
  overflow: hidden;
`;

export const SContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 60px 30px 0 30px;

  box-sizing: border-box;
`;

export const SMoney = styled.div`
  position: absolute;
  z-index: 1;
  top: -30px;
  left: 0;
  width: 100%;
  height: 270px;

  background-image: url("/money.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;

  opacity: 0.5;
  pointer-events: none;
`;
