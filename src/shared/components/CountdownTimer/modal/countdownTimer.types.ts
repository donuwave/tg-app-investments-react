export interface CountdownTimerProps {
    targetDate: Date | string | number;
    onEnd?: () => void;
    className?: string;
}

export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export type IForm = [string, string, string]
