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
} from "./CountdownTimer.styles.ts";
import type {CountdownTimerProps, TimeLeft} from "../modal/countdownTimer.types.ts";
import {getTimeLeft, plural, pad2} from "../lib/countdownTimer.ts";


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
        <img src="/Subtract.png" alt="Subtract"/>
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
