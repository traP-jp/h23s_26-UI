import { css } from '@emotion/react';
import { RingProgress, useMantineTheme } from '@mantine/core';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { Description } from '@/components/Description';
import { Layout } from '@/components/Layout';
import { MissionList } from '@/components/MissionList';
import { useUserInfo } from '@/hooks/useUserInfo';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetMissionsResponse } from '@/schema/schema';

const Missions: NextPage = () => {
  const theme = useMantineTheme();

  const { data: missions, error: missionsError } = useSWR<GetMissionsResponse>(
    `${getApiBaseUrl()}/missions`,
    fetcher,
  );
  const { data: user, error: userError } = useUserInfo();

  return (
    <>
      <Description
        title="Missions | traP Mission"
        description="数々のミッションをこなし、一流のtraPerになろう！"
      />
      <Layout>
        <div>
          <h1
            css={css`
              display: flex;
              align-items: center;
              padding: 0.25rem 1rem;
              border-bottom: 1px solid ${theme.colors.gray[2]};
              font-size: 1.5rem;
              gap: 8px;
              line-height: 2rem;
            `}
          >
            <div>Missions</div>
            {!missionsError && !userError && (
              <RingProgress
                sections={[
                  {
                    color: theme.primaryColor,
                    value:
                      user && missions
                        ? (user.achieves.length / missions.length) * 100
                        : 0,
                  },
                ]}
                size={32}
                thickness={4}
              />
            )}
          </h1>
          <MissionList missions={missions} user={user} />
        </div>
      </Layout>
    </>
  );
};

export default Missions;
