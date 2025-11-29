import { useEffect, useState } from "react";
import {
  STimerWrapper,
  STimerBg,
  STimerContent,
  STimerHeader,
  SBlock,
  SValue,
  SLabel,
  SColon,
} from "./CountdownTimer.styles";

interface CountdownTimerProps {
  targetDate: Date | string | number;
  onEnd?: () => void;
  className?: string;
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (target: number): TimeLeft => {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0 || !Number.isFinite(diff)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

const plural = (n: number, forms: [string, string, string]) => {
  const nAbs = Math.abs(n) % 100;
  const n1 = nAbs % 10;

  if (nAbs > 10 && nAbs < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
};

const pad2 = (n: number) => n.toString().padStart(2, "0");

export const CountdownTimer = ({
  targetDate,
  onEnd,
  className,
}: CountdownTimerProps) => {
  const targetTimestamp =
    typeof targetDate === "number"
      ? targetDate
      : new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetTimestamp),
  );

  useEffect(() => {
    if (!targetTimestamp || Number.isNaN(targetTimestamp)) return;

    const update = () => {
      const next = getTimeLeft(targetTimestamp);
      setTimeLeft(next);

      if (
        next.days === 0 &&
        next.hours === 0 &&
        next.minutes === 0 &&
        next.seconds === 0
      ) {
        onEnd?.();
        clearInterval(timerId);
      }
    };

    update();
    const timerId = setInterval(update, 1000);
    return () => clearInterval(timerId);
  }, [targetTimestamp, onEnd]);

  const { days, hours, minutes } = timeLeft;

  return (
    <STimerWrapper className={className}>
      <STimerHeader>
        <img src="/Subtract.png" />
        <span>Осталось</span>
      </STimerHeader>
      <STimerBg />
      <STimerContent>
        <SBlock>
          <SValue>{days}</SValue>
          <SLabel>{plural(days, ["день", "дня", "дней"])}</SLabel>
        </SBlock>

        <SColon>:</SColon>

        <SBlock>
          <SValue>{pad2(hours)}</SValue>
          <SLabel>{plural(hours, ["час", "часа", "часов"])}</SLabel>
        </SBlock>

        <SColon>:</SColon>

        <SBlock>
          <SValue>{pad2(minutes)}</SValue>
          <SLabel>{plural(minutes, ["минута", "минуты", "минут"])}</SLabel>
        </SBlock>
      </STimerContent>
    </STimerWrapper>
  );
};
