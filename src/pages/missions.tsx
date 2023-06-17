import { css } from '@emotion/react';
import { Anchor, Card, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import { Layout } from '@/components/Layout';
import type { GetMissionsResponse } from '@/schema/schema';

const Missions: NextPage = () => {
  // TODO: APIからmissionsを設定する
  const [missions, _] = useState<GetMissionsResponse>([
    {
      id: 'mission-1',
      name: 'Mission 1',
      description: 'Mission 1 description',
      achievers: ['user1', 'user2'],
    },
    {
      id: 'mission-2',
      name: 'Mission 2',
      description: 'Mission 2 description',
      achievers: [],
    },
  ]);

  return (
    <Layout>
      <div>
        <Text size="xl" weight={700}>
          Missions
        </Text>
        <SimpleGrid cols={4} mt="md">
          {missions.map((mission) => (
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
