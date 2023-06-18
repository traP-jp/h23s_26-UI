import { Flex, Loader } from '@mantine/core';
import type { FC } from 'react';
import useSWR from 'swr';
import { MissionPanel } from '@/components/DashBoard/MissionPanel';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUserResponse } from '@/schema/schema';

export const MyAchieves: FC = () => {
  const { data } = useSWR<GetUserResponse>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );

  if (data == undefined) return <Loader variant="oval" />;

  return (
    <Flex wrap="wrap" gap="xs" p="lg">
      {data.achieves.map((missionId) => (
        <MissionPanel key={missionId} missionId={missionId} />
      ))}
    </Flex>
  );
};
