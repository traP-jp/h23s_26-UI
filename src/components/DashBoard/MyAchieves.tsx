import { Loader } from '@mantine/core';
import type { FC } from 'react';
import useSWR from 'swr';
import { MissionList } from '@/components/MissionList';
import { useUserInfo } from '@/hooks/useUserInfo';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetMissionsResponse } from '@/schema/schema';

export const MyAchieves: FC = () => {
  const { data: user, error } = useUserInfo();
  const { data: missions } = useSWR<GetMissionsResponse>(
    `${getApiBaseUrl()}/missions`,
    fetcher,
  );

  if (user == undefined || missions === undefined)
    return <Loader variant="oval" />;

  if (error !== undefined) return <div>Something went wrong</div>;

  const achieves = missions
    ? missions.filter((mission) => user.achieves.includes(mission.id))
    : undefined;

  return <MissionList missions={achieves} />;
};
