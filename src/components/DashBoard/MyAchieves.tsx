import { Loader } from '@mantine/core';
import type { FC } from 'react';
import useSWR from 'swr';
import { MissionList } from '@/components/MissionList';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetMissionsResponse, GetUserResponse } from '@/schema/schema';

export const MyAchieves: FC = () => {
  const { data } = useSWR<GetUserResponse>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );
  const { data: missions } = useSWR<GetMissionsResponse>(
    `${getApiBaseUrl()}/missions`,
    fetcher,
  );
  const achieves = missions
    ? missions.filter((mission) => data?.achieves.includes(mission.id))
    : undefined;

  if (data == undefined) return <Loader variant="oval" />;

  return <MissionList missions={achieves} />;
};
