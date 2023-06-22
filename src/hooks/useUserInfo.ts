import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useConfirmation } from '@/app/Confirmation/useConfirmation';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type { GetUserResponse } from '@/schema/schema';

type UseUserInfoOptions = {
  requireAuth?: boolean;
};

export const useUserInfo = (option?: UseUserInfoOptions) => {
  const { push } = useRouter();
  const { openConfirmationDialog } = useConfirmation();
  const { data, error } = useSWR<GetUserResponse>(
    `${getApiBaseUrl()}/users/me`,
    fetcher,
  );

  useEffect(() => {
    if (!option?.requireAuth) return;

    console.log('useUserInfo: requireAuth');

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
  }, [openConfirmationDialog, option?.requireAuth, push]);

  if (error) {
    return undefined;
  }

  return { userId: data?.id };
};
