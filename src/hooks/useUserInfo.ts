import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { SWRResponse } from 'swr';
import useSWR from 'swr';
import { useConfirmation } from '@/features/confirmation/useConfirmation';
import type { FetchError } from '@/lib/fetcher';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUserResponse } from '@/schema/schema';

type UseUserInfoOptions = {
  requireAuth?: boolean;
};

export const useUserInfo = (
  option?: UseUserInfoOptions,
): SWRResponse<GetUserResponse, FetchError> => {
  const { push } = useRouter();
  const { openConfirmationDialog } = useConfirmation();
  const response = useSWR<GetUserResponse, FetchError>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );
  const { error } = response;

  useEffect(() => {
    if (!option?.requireAuth) return;
    if (!error) return;
    if (error.status !== 401) return;

    openConfirmationDialog({
      message:
        'このページを表示するにはログインする必要があります。\nログイン画面 (外部ページ) に遷移してもよろしいですか？\n (キャンセルを押すとトップページに戻ります)',
      onConfirm: () => {
        push(`${getApiBaseUrl()}/oauth2/authorize`);
      },
      onCancel: () => {
        push('/');
      },
    });
  }, [error, openConfirmationDialog, option?.requireAuth, push]);

  return response;
};
