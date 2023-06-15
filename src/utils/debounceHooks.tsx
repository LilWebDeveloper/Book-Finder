import { useEffect, useState } from "react";

export default function useDebounce(
  value: string,
  timeout: number,
  callback: () => void
): void {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  const clearTimer = (): void => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  useEffect((): void => {
    clearTimer();

    if (value && callback) {
      const newTimer = setTimeout(callback, timeout);
      setTimer(newTimer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}
