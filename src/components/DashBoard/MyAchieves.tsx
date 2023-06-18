import { Loader } from '@mantine/core';
import type { FC } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUserResponse } from '@/schema/schema';

export const MyAchieves: FC = () => {
  const { data } = useSWR<GetUserResponse>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );

  if (data == undefined) return <Loader variant="oval" />;

  return <div>{data.achieves}</div>;
};
