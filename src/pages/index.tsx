import type { NextPage } from 'next';
import { Description } from '@/components/Description';
import { Layout } from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Description
        title="Next.js with Mantine UI Template"
        description="Next.jsをMantine UIと一緒に色々セットアップしてあるオレオレテンプレートリポジトリです。ご利用は計画的に。"
      />

      <Layout>
        <h1>Next.js with Mantine UI Template</h1>
        <p>
          Next.jsをMantine
          UIと一緒に色々セットアップしてあるオレオレテンプレートリポジトリです。ご利用は計画的に。
        </p>
      </Layout>
    </>
  );
};

export default Home;
