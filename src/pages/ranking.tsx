import React from 'react';
import useSWR from 'swr';
import { HeaderResponsive } from '@/components/Header';
import { Footer } from '@/components/MobileFooter';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type * as schema from '@/schema/schema';

function Ranking() {
  const { data } = useSWR<schema.GetRankingResponse>(
    `${getApiBaseUrl()}/ranking`,
    fetcher,
  );
  if (data === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <div>ランキング</div>
        <div>
          {data.ranking.map((rank, index) => (
            <div key={rank}>
              <div>
                {index + 1} {rank}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default function RankingPage() {
  return (
    <>
      <HeaderResponsive />
      <main>
        <Ranking />
      </main>
      <Footer />
    </>
  );
}
