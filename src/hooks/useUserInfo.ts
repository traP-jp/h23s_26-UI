import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUserResponse } from '@/schema/schema';

type UseUserInfoOptions = {
  requireAuth?: boolean;
};

export const useUserInfo = (option?: UseUserInfoOptions) => {
  const { push } = useRouter();
  const { data, error } = useSWR<GetUserResponse>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );

  if (error) {
    if (option?.requireAuth) {
      push(`${getApiBaseUrl()}/oauth2/authorize`);
    }
    return undefined;
  }

  return { userId: data?.id };
};
