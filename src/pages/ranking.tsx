import { Description } from '@/components/Description';
import { Layout } from '@/components/Layout';
import { Ranking } from '@/components/Ranking/Ranking';

const RankingPage = () => {
  return (
    <>
      <Description
        title="Ranking | traP Mission"
        description="数々のミッションをこなし、一流のtraPerになろう！"
      />
      <Layout>
        <Ranking />
      </Layout>
    </>
  );
};

export default RankingPage;
