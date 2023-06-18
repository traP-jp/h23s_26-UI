import { Center, Skeleton, Text } from '@mantine/core';
import type { FC } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUserResponse } from '@/schema/schema';

export const Ranking: FC = () => {
  const { data } = useSWR<GetUserResponse>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );

  return (
    <div>
      <h2>You are now in</h2>
      <Center maw={400} h={200} mx="auto">
        {data ? <Text>{data.ranking} th</Text> : <Skeleton w="100%" h="1rem" />}
      </Center>
    </div>
  );
};
