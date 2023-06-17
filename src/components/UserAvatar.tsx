import { Avatar } from '@mantine/core';
import { useUserInfo } from '@/hooks/useUserInfo';

export const UserAvatar = (
  iconSize: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
) => {
  const { userId } = useUserInfo();
  const iconUrl = `https://q.trap.jp/api/v3/public/icon/${encodeURIComponent(
    userId,
  )}`;
  return <Avatar src={iconUrl} size={iconSize} />;
};
