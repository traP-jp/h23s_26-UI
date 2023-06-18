import { css } from '@emotion/react';
import React from 'react';
import useSWR from 'swr';
import { Layout } from '@/components/Layout';
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
        <h1
          css={css`
            height: 4rem;
            text-align: center;
          `}
        >
          ランキング
        </h1>
        <div>
          {data.ranking.map((rank, index) => (
            <div key={rank}>
              <div
                css={css`
                  text-align: center;
                `}
              >
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
      <Layout>
        <Ranking />
      </Layout>
    </>
  );
}
