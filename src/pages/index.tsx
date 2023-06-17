import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { Description } from '@/components/Description';
import { HeaderResponsive } from '@/components/Header';
import { Footer } from '@/components/MobileFooter';

const Home: NextPage = () => {
  return (
    <>
      <HeaderResponsive />
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
        <Footer />
      </div>
    </>
  );
};

export default Home;
