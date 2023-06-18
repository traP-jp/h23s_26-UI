import { css } from '@emotion/react';
import { RingProgress, Text, Center } from '@mantine/core';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { Layout } from '@/components/Layout';
import { MyUserAvatar } from '@/components/UserAvatar';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUserResponse } from '@/schema/schema';

`${getApiBaseUrl()}/missions`;

function Profile() {
  const { data, error } = useSWR(`${getApiBaseUrl()}/users/me`, fetcher);

  if (error) return <div>failed to load</div>;
  if (data == undefined) return <div>loading...</div>;
  return (
    <div>
      <MyUserAvatar iconSize="xl" />
      <Center>
        <h1>{data.id}</h1>
      </Center>
    </div>
  );
}

function MyAchieves() {
  const { data, error } = useSWR<GetUserResponse>(
    '${getApiBaseUrl()}/users/me',
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (data == undefined) return <div>loading...</div>;

  return <div>{data.achieves}</div>;
}

function useMyAchievesNumber(): number {
  const { data } = useSWR<GetUserResponse>(
    '${getApiBaseUrl()}/users/me',
    fetcher,
  );

  if (data == undefined) return 0;

  return data?.achieves.length;
}

function useAllMissionsNumber() {
  const { data } = useSWR<GetUserResponse>(
    '${getApiBaseUrl()}/missions',
    fetcher,
  );
  return data?.achieves.length;
}

function RingGraph({ myAchieves = 40, allMissions = 100 }) {
  const ratio = Math.floor((100 * myAchieves) / allMissions);
  return (
    <RingProgress
      roundCaps
      size={250}
      thickness={30}
      sections={[{ value: ratio, color: 'cyan' }]}
      label={
        <center>
          <Text color="blue" weight={900} align="center" size="xl">
            {ratio} %
          </Text>
        </center>
      }
    />
  );
}

function Ranking() {
  const { data, error, isLoading } = useSWR(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h2>You are now in</h2>
      <Center maw={400} h={200} mx="auto">
        <h1>{data.ranking} th</h1>
      </Center>
    </div>
  );
}

const DashBoard: NextPage = () => {
  const myAchieveNumber = useMyAchievesNumber();
  const allMissionNumber = useAllMissionsNumber();
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
              myAchieves={myAchieveNumber}
              allMissions={allMissionNumber}
            />
          </div>
          <div>
            <Ranking />
          </div>
        </div>
        <div>
          <Center>
            <h2>Your recent achivement</h2>
          </Center>
          <Center>
            <MyAchieves />
          </Center>
        </div>
      </Layout>
    </>
  );
};

export default DashBoard;
