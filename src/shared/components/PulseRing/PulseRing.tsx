import { Wrapper, Ring, CenterDot } from "./pulseRing.styles";

export const PulseRing = () => {
  return (
    <Wrapper>
      <CenterDot />
      <Ring delay="0s" />
      <Ring delay="0.5s" />
      <Ring delay="1s" />
    </Wrapper>
  );
};
