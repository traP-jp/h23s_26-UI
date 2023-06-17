import { css } from '@emotion/react';
import { Card, Overlay, Skeleton, Text, useMantineTheme } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import type { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';
import { Layout } from '@/components/Layout';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetMissionsResponse, GetUserResponse } from '@/schema/schema';

const Missions: NextPage = () => {
  const theme = useMantineTheme();

  const { data: missions } = useSWR<GetMissionsResponse>(
    `${getApiBaseUrl()}/missions`,
    fetcher,
  );
  const { data: user } = useSWR<GetUserResponse>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );

  return (
    <Layout>
      <div>
        <h1
          css={css`
            padding: 0.25rem 1rem;
            border-bottom: 1px solid ${theme.colors.gray[2]};
            font-size: 1.5rem;
            line-height: 2rem;
          `}
        >
          Missions
        </h1>
        <div
          css={css`
            display: grid;
            margin-top: ${theme.spacing.md};
            gap: 8px;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          `}
        >
          {missions
            ? missions.map((mission) => (
                <Link
                  href={`/missions/${mission.id}`}
                  key={mission.id}
                  css={css`
                    color: inherit;
                    text-decoration: none;
                  `}
                >
                  <Card
                    shadow="xs"
                    padding="lg"
                    css={css`
                      transition: all 0.2s;

                      &:hover {
                        box-shadow: ${theme.shadows.sm};
                        opacity: 0.8;
                      }
                    `}
                  >
                    {user?.achieves.includes(mission.id) && (
                      <Overlay
                        css={css`
                          display: grid;
                          background-color: ${theme.fn.rgba(theme.white, 0.8)};
                          color: ${theme.colors.lime[5]};
                          place-items: center;
                        `}
                      >
                        <IconCheck size="5rem" />
                      </Overlay>
                    )}
                    <Text fw="500" className="mission-title">
                      {mission.name}
                    </Text>
                    <Text color="dimmed" className="mission-description">
                      {mission.description}
                    </Text>
                  </Card>
                </Link>
              ))
            : new Array(4).fill(0).map((_, i) => <Skeleton h={90} key={i} />)}
        </div>
      </div>
    </Layout>
  );
};

export default Missions;
