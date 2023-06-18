import { css } from '@emotion/react';
import { Anchor, Card, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { Layout } from '@/components/Layout';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetMissionsResponse } from '@/schema/schema';

const Missions: NextPage = () => {
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
        <Text size="xl" weight={700}>
          Missions
        </Text>
        <SimpleGrid cols={4} mt="md">
          {missions?.map((mission) => (
            <UnstyledButton
              key={mission.id}
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <Card shadow="sm" padding="lg">
                <Anchor href={`/missions/${mission.id}`}>
                  <Text>{mission.name}</Text>
                  <Text>{mission.description}</Text>
                </Anchor>
              </Card>
            </UnstyledButton>
          ))}
        </SimpleGrid>
      </div>
    </Layout>
  );
};

export default Missions;
