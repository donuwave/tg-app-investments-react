import {
  SList,
  STitle,
  SContainer,
  STopTitle,
  SListCard,
  STopTitleInWork,
} from "./investmentList.styles";
import { investments } from "../lib/investments";
import { InvestmentChoiceModal } from "@features/InvestmentChoiceModal";
import { useState, useEffect, useRef } from "react";
import {
  type IInvestmentCard,
  InvestmentCard,
  InvestmentInWordCard,
  type InvestmentInWorkCard,
} from "@entities/investment";
import { TimeIcon } from "@shared/assets";

interface InvestmentListProps {
  onInWorkChange?: (hasInWork: boolean) => void;
}

const IN_WORK_STORAGE_KEY = "inWorkInvestments";

export const InvestmentList = ({ onInWorkChange }: InvestmentListProps) => {
  const [choiceInvestment, setChoiceInvestment] = useState<IInvestmentCard>({
    id: 1,
    days: 0,
    daysText: "",
    profit: "",
    invest: "",
    take: "",
    time: "",
    gradientColor: "",
    gradientEndColor: "",
    modalColor: "",
    src: "",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inWorkList, setInWorkList] = useState<InvestmentInWorkCard[]>([]);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inWorkRef = useRef<HTMLDivElement | null>(null);
  const investmentsRef = useRef<HTMLDivElement | null>(null);

  const [activeTitle, setActiveTitle] = useState<"Инвестиции" | "В работе">(
    "Инвестиции",
  );

  const handleChoiceInvestment = (investment: IInvestmentCard) => {
    setChoiceInvestment(investment);
    setIsOpen(true);
  };

  const handleChoice = (investment: IInvestmentCard) => {
    const inWork: InvestmentInWorkCard = {
      id: investment.id,
      days: investment.days,
      daysText: investment.daysText,
      profit: investment.profit,
      src: investment.src,
      time: investment.time,
      gradientColor: investment.gradientColor,
      gradientEndColor: investment.gradientEndColor,
    };

    setInWorkList((prev) => [...prev, inWork]);
  };

  const isWork = !!inWorkList.length;

  const handleScroll = () => {
    const list = listRef.current;
    if (!list) return;

    const scrollTop = list.scrollTop;

    const inWorkTop = inWorkRef.current ? inWorkRef.current.offsetTop : 0;
    const investmentsTop = investmentsRef.current
      ? investmentsRef.current.offsetTop
      : 0;

    const offset = 10;

    if (scrollTop + offset >= investmentsTop) {
      setActiveTitle("Инвестиции");
    } else if (isWork && scrollTop + offset >= inWorkTop) {
      setActiveTitle("В работе");
    } else {
      setActiveTitle(isWork ? "В работе" : "Инвестиции");
    }
  };

  const hasHydratedRef = useRef(false);

  useEffect(() => {
    onInWorkChange?.(isWork);
  }, [isWork, onInWorkChange]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(IN_WORK_STORAGE_KEY);
      if (!stored) return;

      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setInWorkList(parsed as InvestmentInWorkCard[]);
      }
    } catch (e) {
      console.error("Failed to parse inWork investments from localStorage", e);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!hasHydratedRef.current) {
      hasHydratedRef.current = true;
      return;
    }

    try {
      window.localStorage.setItem(
        IN_WORK_STORAGE_KEY,
        JSON.stringify(inWorkList),
      );
    } catch (e) {
      console.error("Failed to save inWork investments to localStorage", e);
    }
  }, [inWorkList]);

  useEffect(() => {
    if (!inWorkList.length) return;

    listRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTitle("В работе");
  }, [inWorkList.length]);

  return (
    <SContainer>
      <InvestmentChoiceModal
        onChoice={handleChoice}
        onClose={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
        investment={choiceInvestment}
      />

      {activeTitle === "Инвестиции" ? (
        <STopTitle>{activeTitle}</STopTitle>
      ) : (
        <STopTitleInWork>
          <TimeIcon />
          {activeTitle}
        </STopTitleInWork>
      )}

      <SList ref={listRef} onScroll={handleScroll}>
        {isWork && (
          <SListCard ref={inWorkRef}>
            {inWorkList.map((el) => (
              <InvestmentInWordCard key={el.id} investment={el} />
            ))}
          </SListCard>
        )}

        <SListCard ref={investmentsRef}>
          {isWork && <STitle>Инвестиции</STitle>}

          {investments.map((el) => (
            <InvestmentCard
              key={el.id}
              onClick={handleChoiceInvestment}
              investment={el}
            />
          ))}
        </SListCard>
      </SList>
    </SContainer>
  );
};
