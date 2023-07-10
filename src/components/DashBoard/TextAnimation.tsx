import { useState, type FC, useEffect } from 'react';

type TextAnimationProps = {
  start: number;
  end: number;
  duration: number;
  delay?: number;
};

const easeOut = (t: number) => {
  return 1 - (1 - t) ** 1.675;
};

export const TextAnimation: FC<TextAnimationProps> = ({
  start,
  end,
  duration,
  delay,
}) => {
  const diff = end - start;
  const [value, setValue] = useState(start);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setValue((prev) => {
          if (prev < end) {
            return prev + 1;
          }
          return prev;
        });
      }, duration / diff);
    }, delay ?? 0);

    return () => {
      clearTimeout(timeout);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [delay, diff, duration, end, start]);

  return (
    <span>{(easeOut((value - start) / diff) * diff + start).toFixed(0)}</span>
  );
};
