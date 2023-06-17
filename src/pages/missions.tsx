import { css } from '@emotion/react';
import { Card, Text, useMantineTheme } from '@mantine/core';
import type { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';
import { Layout } from '@/components/Layout';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetMissionsResponse } from '@/schema/schema';

const Missions: NextPage = () => {
  const theme = useMantineTheme();

  const {
    data: missions,
    error,
    isLoading,
  } = useSWR<GetMissionsResponse>(`${getApiBaseUrl()}/missions`, fetcher);
  if (error) return <div>failed to load: {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <div>
        <h1>Missions</h1>
        <div
          css={css`
            display: grid;
            margin-top: ${theme.spacing.md};
            gap: 8px;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          `}
        >
          {missions?.map((mission) => (
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
                <Text fw="500" className="mission-title">
                  {mission.name}
                </Text>
                <Text color="dimmed" className="mission-description">
                  {mission.description}
                </Text>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Missions;
