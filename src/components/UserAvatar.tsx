import { Avatar } from '@mantine/core';
import { useUserInfo } from '@/hooks/useUserInfo';

export const UserAvatar = () => {
  const { userId } = useUserInfo();
  const iconUrl = `https://q.trap.jp/api/v3/public/icon/${encodeURIComponent(
    userId,
  )}`;
  return <Avatar src={iconUrl} />;
};
