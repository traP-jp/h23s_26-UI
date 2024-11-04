import { css } from '@emotion/react';
import { Center, useMantineTheme } from '@mantine/core';
import type { FC } from 'react';
import { MyAchieves } from '@/components/DashBoard/MyAchieves';
import { Profile } from '@/components/DashBoard/Profile';
import { Ranking } from '@/components/DashBoard/Ranking';
import { RingGraph } from '@/components/DashBoard/RingGraph';
import { useAllMissionsCount } from '@/components/DashBoard/useAllMissionsCount';
import { useMyAchievesCount } from '@/components/DashBoard/useMyAchievesCount';
import { Description } from '@/components/Description';
import { Layout } from '@/components/Layout';
import { useUserInfo } from '@/hooks/useUserInfo';

export const DashBoard: FC = () => {
  useUserInfo({ requireAuth: true });

  const theme = useMantineTheme();
  const myAchieveNumber = useMyAchievesCount();
  const allMissionNumber = useAllMissionsCount();

  return (
    <>
      <Description
        title="DashBoard | traP Mission"
        description="数々のミッションをこなし、一流のtraPerになろう！"
      />
      <Layout>
        <div>
          <Center h={200} mx="auto">
            <Profile />
          </Center>
        </div>
        <div
          css={css`
            display: flex;
            place-content: center;

            ${theme.fn.smallerThan('sm')} {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex: 1;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            <h2>Your Shinchoku</h2>
            <RingGraph
              myAchieves={myAchieveNumber ?? 0}
              allMissions={allMissionNumber ?? 0}
            />
          </div>
          <div
            css={css`
              display: flex;
              flex: 1;
              flex-direction: column;
              align-items: center;
            `}
          >
            <Ranking />
          </div>
        </div>
        <div>
          <Center>
            <h2>Your recent achievement</h2>
          </Center>
          <div>
            <MyAchieves />
          </div>
        </div>
      </Layout>
    </>
  );
};
