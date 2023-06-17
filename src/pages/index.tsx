import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { Description } from '@/components/Description';
import { FooterCentered } from '@/components/MobileFooter';

const Home: NextPage = () => {
  const links = [
    { label: 'DashBoard', link: '/DashBoard' },
    { label: 'Missions', link: '/Missions' },
    { label: 'Ranking', link: '/Ranking' },
  ];
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
        <h1>Next.js with Mantine UI Template</h1>
        <p>
          Next.jsをMantine
          UIと一緒に色々セットアップしてあるオレオレテンプレートリポジトリです。ご利用は計画的に。
        </p>
        <FooterCentered links={links} />
      </div>
    </>
  );
};

export default Home;
