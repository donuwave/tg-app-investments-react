import {
  ApproveCircleIcon,
  ApproveIcon,
  CloseIcon,
  StarIcon,
} from "@shared/assets";
import type { FC } from "react";
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
  SItemClose, SImg,
} from "./investmentChoiceModal.styles";

const Close = () => (
    <SCloseIcon>
      <CloseIcon />
    </SCloseIcon>
)

export const InvestmentChoiceModal: FC<IInvestmentChoiceModal> = ({
  investment,
  onClose,
  isOpen,
  onChoice,
}) => {
  const src = investment.src + "-modal.png";

  const handleAction = () => {
    onClose();
    onChoice(investment);
  };

  return (
    <SModal
      open={isOpen}
      onCancel={onClose}
      closeIcon={<Close />}
    >
      <SContent $c={investment.modalColor}>
        <SImg src={src} alt={investment.daysText}/>

        <SInfo>
          <SHead>
            <STitleCard>{investment.daysText}</STitleCard>
            <SCash>{investment.profit}</SCash>
          </SHead>

          <SLine>
            <StarIcon />
            <SItem>Вложи {investment.invest}</SItem>
            <StarIcon />
            <SItem>{investment.time}</SItem>
            <SApprove $c={investment.gradientEndColor}>
              <ApproveIcon />
            </SApprove>
            <SItemClose>забери {investment.take}</SItemClose>
          </SLine>
        </SInfo>

        <SAction
          onClick={handleAction}
          $c={investment.gradientEndColor}
          icon={<ApproveCircleIcon />}
        >
          Принять
        </SAction>
      </SContent>
    </SModal>
  );
};
