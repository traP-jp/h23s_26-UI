import { css } from '@emotion/react';
import { RingProgress, Text, Center } from '@mantine/core';
import type { NextPage } from 'next';
import { HeaderResponsive } from '@/components/Header';
import { Footer } from '@/components/MobileFooter';
import { UserAvatar } from '@/components/UserAvatar';

function RingGraph() {
  return (
    <RingProgress
      roundCaps
      size={250}
      thickness={30}
      sections={[{ value: 40, color: 'cyan' }]}
      label={
        <center>
          <Text color="blue" weight={900} align="center" size="xl">
            40%
          </Text>
        </center>
      }
    />
  );
}

const DashBoard: NextPage = () => {
  return (
    <>
      <HeaderResponsive />
      <div>
        <p>
          <Center maw={100} h={200} mx="auto">
            <UserAvatar iconSize="xl" />
          </Center>
        </p>
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
          <h2>Your Shinchoku</h2>
          <RingGraph />
        </div>
        <div>
          <h2>You are now in</h2>
          <h1>50 th</h1>
        </div>
      </div>
      <div>
        <p>
          <Center>
            <h2>Your recent achivement</h2>
          </Center>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default DashBoard;
