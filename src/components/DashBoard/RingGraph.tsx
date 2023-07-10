import { css } from '@emotion/react';
import { Center, RingProgress, Text, useMantineTheme } from '@mantine/core';
import type { FC } from 'react';
import { TextAnimation } from '@/components/DashBoard/TextAnimation';

type RingGraphProps = {
  myAchieves: number;
  allMissions: number;
};

const size = 250;
const thickness = 30;

const ratioToOffset = (ratio: number) => {
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = (Math.PI * radius * 2) / 100;

  return `${ratio * deg}, ${(100 - ratio) * deg}`;
};

export const RingGraph: FC<RingGraphProps> = ({ myAchieves, allMissions }) => {
  const theme = useMantineTheme();

  const ratio = allMissions && Math.floor((100 * myAchieves) / allMissions);

  return (
    <RingProgress
      roundCaps
      size={size}
      thickness={thickness}
      sections={[{ value: ratio, color: 'cyan' }]}
      css={css`
        svg circle:nth-of-type(1) {
          stroke-dasharray: 0 0;
        }

        svg circle:nth-of-type(2) {
          animation: loading 0.5s 0.5s ease-out forwards;
          stroke-dasharray: ${ratioToOffset(0)};
        }

        @keyframes loading {
          from {
            stroke-dasharray: ${ratioToOffset(0)};
          }

          to {
            stroke-dasharray: ${ratioToOffset(ratio)};
          }
        }
      `}
      label={
        <Center
          css={css`
            flex-direction: column;
          `}
        >
          <Text
            color={theme.primaryColor}
            weight={900}
            align="center"
            size="xl"
          >
            <TextAnimation start={0} end={ratio} duration={500} delay={300} /> %
          </Text>
          <Text align="center" size="md">
            ({myAchieves} / {allMissions})
          </Text>
        </Center>
      }
    />
  );
};
