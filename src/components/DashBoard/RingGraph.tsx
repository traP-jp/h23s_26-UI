import { Center, RingProgress, Text, useMantineTheme } from '@mantine/core';
import type { FC } from 'react';

type RingGraphProps = {
  myAchieves: number;
  allMissions: number;
};

export const RingGraph: FC<RingGraphProps> = ({ myAchieves, allMissions }) => {
  const theme = useMantineTheme();

  const ratio = Math.floor((100 * myAchieves) / allMissions);

  return (
    <RingProgress
      roundCaps
      size={250}
      thickness={30}
      sections={[{ value: ratio, color: 'cyan' }]}
      label={
        <Center>
          <Text
            color={theme.primaryColor}
            weight={900}
            align="center"
            size="xl"
          >
            {ratio} %
          </Text>
        </Center>
      }
    />
  );
};
