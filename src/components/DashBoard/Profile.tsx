import { css } from '@emotion/react';
import { Center, Skeleton, Text, useMantineTheme } from '@mantine/core';
import type { FC } from 'react';
import useSWR from 'swr';
import { MyUserAvatar } from '@/components/UserAvatar';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';

export const Profile: FC = () => {
  const theme = useMantineTheme();
  const { data } = useSWR(`${getApiBaseUrl()}/users/me`, fetcher);

  return (
    <Center
      css={css`
        gap: 16px;
        ${theme.fn.smallerThan('xs')} {
          flex-direction: column;
        }
      `}
    >
      <MyUserAvatar iconSize="xl" />
      <Text fw="bold" fz="2rem">
        {data ? data.id : <Skeleton w="10rem" h="2rem" />}
      </Text>
    </Center>
  );
};
