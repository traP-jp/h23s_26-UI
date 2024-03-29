import { css } from '@emotion/react';
import { Center, Loader, useMantineTheme, Text } from '@mantine/core';
import { IconCrown } from '@tabler/icons-react';
import type { FC } from 'react';
import useSWR from 'swr';
import { UserAvatar } from '@/components/UserAvatar';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUsersResponse } from '@/schema/schema';

export const Ranking: FC = () => {
  const theme = useMantineTheme();
  const { data } = useSWR<GetUsersResponse>(
    `${getApiBaseUrl()}/users`,
    fetcher,
  );

  const getRankColor = (rank: number) =>
    rank === 1
      ? theme.colors.yellow[7]
      : rank === 2
      ? theme.colors.gray[7]
      : rank === 3
      ? theme.colors.orange[7]
      : theme.colors.gray[5];

  const getRankIndex = (rank: number) =>
    [1, 2, 3].includes(rank) ? (
      <IconCrown size="1.5rem" fill="currentColor" />
    ) : (
      rank
    );

  return (
    <div>
      <h1
        css={css`
          padding: 0.25rem 1rem;
          border-bottom: 1px solid ${theme.colors.gray[2]};
          font-size: 1.5rem;
          line-height: 2rem;
        `}
      >
        Ranking
      </h1>
      {data ? (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            gap: 16px;
          `}
        >
          {data.map((user, index) => (
            <div
              key={user.id}
              css={css`
                display: flex;
                width: 100%;
                height: 2.5rem;
                align-items: center;
                border-radius: ${theme.radius.sm};
                margin: 0 auto;
                background-color: ${theme.fn.rgba(
                  getRankColor(index + 1),
                  0.2,
                )};
                gap: 16px;
              `}
            >
              <div
                css={css`
                  display: grid;
                  width: 3rem;
                  color: ${getRankColor(index + 1)};
                  font-size: 1.5rem;
                  font-weight: 500;
                  place-content: center;
                  text-align: center;
                `}
              >
                {getRankIndex(index + 1)}
              </div>
              <UserAvatar userId={user.id} iconSize="sm" />
              <Text size="lg">{user.id}</Text>
            </div>
          ))}
        </div>
      ) : (
        <Center p="xl">
          <Loader variant="oval" />
        </Center>
      )}
    </div>
  );
};
