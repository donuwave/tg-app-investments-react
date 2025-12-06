import {
  ApproveCircleIcon,
  ApproveIcon,
  CloseIcon,
  StarIcon,
} from "@shared/assets";
import { type FC, useEffect } from "react";
import type { IInvestmentChoiceModal } from "../model/investmentChoiceModal.types";
import {
  SModal,
  SCloseIcon,
  SInfo,
  SAction,
  SContent,
  SHead,
  SLine,
  SCash,
  STitleCard,
  SApprove,
  SItem,
  SItemClose,
} from "./investmentChoiceModal.styles";
import { useTranslation } from "react-i18next";

export const InvestmentChoiceModal: FC<IInvestmentChoiceModal> = ({
  investment,
  onClose,
  isOpen,
  onChoice,
}) => {
  const { t } = useTranslation();
  const src = investment.src + "-modal.png";

  const handleAction = () => {
    onClose();
    onChoice(investment);
  };

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <SModal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={415}
      centered={false}
      style={{ top: "170px", height: "70dvh", width: "415px" }}
      closeIcon={
        <SCloseIcon>
          <CloseIcon />
        </SCloseIcon>
      }
    >
      <SContent $c={investment.modalColor}>
        <img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        <SInfo>
          <SHead>
            <STitleCard>{investment.daysText}</STitleCard>
            <SCash>{investment.profit}</SCash>
          </SHead>

          <SLine>
            <StarIcon />
            <SItem>
              {t("investment.invest")} {investment.invest}
            </SItem>
            <StarIcon />
            <SItem>{investment.time}</SItem>
            <SApprove $color={investment.gradientEndColor}>
              <ApproveIcon />
            </SApprove>
            <SItemClose>
              {t("investment.take")} {investment.take}
            </SItemClose>
          </SLine>
        </SInfo>

        <SAction
          onClick={handleAction}
          $c={investment.gradientEndColor}
          icon={<ApproveCircleIcon />}
        >
          {t("investment.accept")}
        </SAction>
      </SContent>
    </SModal>
  );
};
