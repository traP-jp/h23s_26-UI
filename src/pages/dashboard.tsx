import { css } from '@emotion/react';
import { RingProgress, Text } from '@mantine/core';
import { Avatar } from '@mantine/core';
import type { NextPage } from 'next';
import { Description } from '@/components/Description';
import { Footer } from '@/components/MobileFooter';

function RingGraph() {
  return (
    <RingProgress
      roundCaps
      sections={[{ value: 40, color: 'cyan' }]}
      label={
        <center>
          <Text color="blue" weight={700} align="center" size="xl">
            40%
          </Text>
        </center>
      }
    />
  );
}

function ShowIcon() {
  return <Avatar size="20" src="avater.pig" />;
}

const DashBoard: NextPage = () => {
  return (
    <>
      <Description
        title="Next.js with Mantine UI Template"
        description="Next.jsをMantine UIと一緒に色々セットアップしてあるオレオレテンプレートリポジトリです。ご利用は計画的に。"
      />

      <div
        css={css`
          display: grid;
          min-height: 100vh;
          place-content: center;
        `}
      >
        <h1>Dashboard</h1>
        <ShowIcon />
        <RingGraph />
        <Footer />
      </div>
    </>
  );
};

export default DashBoard;
