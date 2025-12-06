import { SInactiveBadge } from "./inactiveBadge.styles";
import { useTranslation } from "react-i18next";

export const InactiveBadge = () => {
  const { t } = useTranslation();

  return <SInactiveBadge>{t("profile.select")}</SInactiveBadge>;
};
