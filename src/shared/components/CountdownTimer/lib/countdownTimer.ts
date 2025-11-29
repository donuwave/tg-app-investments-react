import type {IForm, TimeLeft} from "../modal/countdownTimer.types";

export const getTimeLeft = (target: number): TimeLeft => {
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

export const plural = (n: number, forms: IForm) => {
    const nAbs = Math.abs(n) % 100;
    const n1 = nAbs % 10;

    if (nAbs > 10 && nAbs < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
};

export const pad2 = (n: number) => n.toString().padStart(2, "0");
