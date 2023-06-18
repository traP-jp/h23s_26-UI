import { Center } from '@mantine/core';
import type { FC } from 'react';
import useSWR from 'swr';
import { MyUserAvatar } from '@/components/UserAvatar';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';

export const Profile: FC = () => {
  const { data, error } = useSWR(`${getApiBaseUrl()}/users/me`, fetcher);

  if (error) return <div>failed to load</div>;
  if (data == undefined) return <div>loading...</div>;
  return (
    <div>
      <MyUserAvatar iconSize="xl" />
      <Center>
        <h1>{data.id}</h1>
      </Center>
    </div>
  );
};
