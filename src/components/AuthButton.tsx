import { Button, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconUser } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { UserAvatar } from '@/components/UserAvatar';
import { useUserInfo } from '@/hooks/useUserInfo';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';

export const AuthButton: FC = () => {
  const theme = useMantineTheme();
  const { data, error } = useUserInfo();
  const { push } = useRouter();
  const isMobile = useMediaQuery(theme.fn.smallerThan('sm'));

  if (error === undefined && data !== undefined) {
    return (
      <>
        <UserAvatar userId={data.id} iconSize={isMobile ? 24 : 32} />
      </>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      leftIcon={<IconUser />}
      onClick={() => {
        push(`${getApiBaseUrl()}/oauth2/authorize`);
      }}
    >
      Authorize
    </Button>
  );
};
