import { SBadge } from "./activeBadge.styles";
import { CheckIcon } from "@shared/assets";

export const ActiveBadge = () => {
  return (
    <SBadge>
      <CheckIcon />
      <span>Выбрано</span>
    </SBadge>
  );
};
