import { css } from '@emotion/react';
import { Center } from '@mantine/core';
import type { FC } from 'react';
import { MyAchieves } from '@/components/DashBoard/MyAchieves';
import { Profile } from '@/components/DashBoard/Profile';
import { Ranking } from '@/components/DashBoard/Ranking';
import { RingGraph } from '@/components/DashBoard/RingGraph';
import { useAllMissionsCount } from '@/components/DashBoard/useAllMissionsCount';
import { useMyAchievesCount } from '@/components/DashBoard/useMyAchievesCount';
import { Layout } from '@/components/Layout';

export const DashBoard: FC = () => {
  const myAchieveNumber = useMyAchievesCount();
  const allMissionNumber = useAllMissionsCount();

  return (
    <>
      <Layout>
        <div>
          <Center maw={100} h={200} mx="auto">
            <Profile />
          </Center>
        </div>
        <div
          css={css`
            display: flex;
            flex: 100px;
            flex-wrap: wrap;
            justify-content: space-around;
            place-content: center;
          `}
        >
          <div>
            <Center>
              <h2>Your Shinchoku</h2>
            </Center>
            <RingGraph
              myAchieves={myAchieveNumber ?? 0}
              allMissions={allMissionNumber ?? 1}
            />
          </div>
          <div>
            <Ranking />
          </div>
        </div>
        <div>
          <Center>
            <h2>Your recent achievement</h2>
          </Center>
          <Center>
            <MyAchieves />
          </Center>
        </div>
      </Layout>
    </>
  );
};
