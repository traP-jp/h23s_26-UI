import { css } from '@emotion/react';
import { Center, Skeleton, Text, useMantineTheme } from '@mantine/core';
import type { FC } from 'react';
import useSWR from 'swr';
import { getRankSuffix } from '@/components/DashBoard/getRankSuffix';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUserResponse } from '@/schema/schema';

export const Ranking: FC = () => {
  const theme = useMantineTheme();
  const { data } = useSWR<GetUserResponse>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );

  const getRankColor = (rank: number) =>
    rank === 1
      ? theme.colors.yellow[7]
      : rank === 2
      ? theme.colors.gray[7]
      : rank === 3
      ? theme.colors.orange[7]
      : theme.black;

  return (
    <div>
      <h2>You are now in</h2>
      <Center maw={400} h={200} mx="auto">
        {data ? (
          <Text color={getRankColor(data.ranking)}>
            <span
              css={css`
                font-size: 5rem;
                font-weight: 500;
              `}
            >
              {data.ranking}
            </span>{' '}
            <span
              css={css`
                font-size: 2rem;
                font-weight: 500;
              `}
            >
              {getRankSuffix(data.ranking)}
            </span>
          </Text>
        ) : (
          <Skeleton w="100%" h="1rem" />
        )}
      </Center>
    </div>
  );
};
