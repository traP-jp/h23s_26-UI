import React from 'react';
import useSWR from 'swr';
import { HeaderResponsive } from '@/components/Header';
import { Footer } from '@/components/MobileFooter';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetRankingResponse } from '@/schema/schema';

function Ranking() {
  const { data } = useSWR<GetRankingResponse[]>(
    `${getApiBaseUrl()}/ranking`,
    fetcher,
  );
  return (
    <div>
      <div>ランキング</div>
      <div>
        {data.map((rank) => (
          <div key={rank.data}>
            <div>{rank.ranking}</div>
          </div>
        ))}
      </div>
    </div>
  );
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
