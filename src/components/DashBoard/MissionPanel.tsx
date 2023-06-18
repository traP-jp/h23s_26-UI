import { css } from '@emotion/react';
import { Card, Skeleton, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import type { FC } from 'react';
import useSWR from 'swr';
import { pagesPath } from '@/lib/$path';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetMissionResponse } from '@/schema/schema';

type MissionPanelProps = {
  missionId: string;
};

export const MissionPanel: FC<MissionPanelProps> = ({ missionId }) => {
  const theme = useMantineTheme();
  const { data } = useSWR<GetMissionResponse>(
    `${getApiBaseUrl()}/missions/${missionId}`,
    fetcher,
  );

  if (data === undefined) return <Skeleton />;

  return (
    <Card
      shadow="xs"
      component={Link}
      href={pagesPath.missions._missionId(missionId).$url()}
      css={css`
        transition: all 0.2s;

        &:hover {
          box-shadow: ${theme.shadows.sm};
          opacity: 0.8;
        }
      `}
    >
      <Text fw="500">{data.name}</Text>
      <Text color="dimmed">{data.description}</Text>
    </Card>
  );
};
