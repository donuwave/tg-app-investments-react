import { SBadge } from "./activeBadge.styles";
import { CheckIcon } from "@shared/assets";
import { useTranslation } from "react-i18next";

export const ActiveBadge = () => {
  const { t } = useTranslation();

  return (
    <SBadge>
      <CheckIcon />
      <span>{t("profile.selected")}</span>
    </SBadge>
  );
};
