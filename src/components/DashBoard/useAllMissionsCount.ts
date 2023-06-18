import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetMissionsResponse } from '@/schema/schema';

export const useAllMissionsCount = () => {
  const { data } = useSWR<GetMissionsResponse>(
    `${getApiBaseUrl()}/missions`,
    fetcher,
  );

  return data?.length;
};
