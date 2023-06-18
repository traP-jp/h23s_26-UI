import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import confetti from 'canvas-confetti';
import { useRef } from 'react';

export const useClearAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useMantineTheme();
  const animate = () => {
    const baseOption: confetti.Options = {
      colors: [
        theme.colors.blue[5],
        theme.colors.green[5],
        theme.colors.red[5],
        theme.colors.cyan[5],
        theme.colors.grape[5],
        theme.colors.pink[5],
        theme.colors.orange[5],
      ],
      particleCount: 100,
      spread: 70,
      startVelocity: 60,
    };
    const leftOption: confetti.Options = {
      ...baseOption,
      angle: 60,
      origin: {
        x: 0,
        y: 1,
      },
    };
    const rightOption: confetti.Options = {
      ...baseOption,
      angle: 120,
      origin: {
        x: 1,
        y: 1,
      },
    };
    confetti(leftOption);
    confetti(rightOption);
  };

  const Canvas = () => (
    <canvas
      ref={canvasRef}
      css={css`
        position: fixed;
        z-index: 10;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
      `}
    />
  );

  return { animate, Canvas };
};
