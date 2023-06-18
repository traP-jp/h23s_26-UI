import { css } from '@emotion/react';
import { Anchor, Card, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import type { NextPage } from 'next';
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
        <h1>Misions</h1>
        <SimpleGrid
          mt="md"
          css={css`
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          `}
        >
          {missions?.map((mission) => (
            <Card
              shadow="sm"
              padding="lg"
              key={mission.id}
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                  box-shadow: ${theme.shadows.md};
                  transform: scale(1.05);
                }
              `}
            >
              <Anchor href={`/missions/${mission.id}`}>
                <Text>{mission.name}</Text>
                <Text>{mission.description}</Text>
              </Anchor>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </Layout>
  );
};

export default Missions;
