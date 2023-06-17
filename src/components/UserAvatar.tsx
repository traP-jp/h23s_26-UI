import { Avatar } from '@mantine/core';
import { useUserInfo } from '@/hooks/useUserInfo';

export const Icon = () => {
  const userInfo = useUserInfo();
  const iconurl = `https://q.trap.jp/api/v3/public/icon/${encodeURIComponent(
    userInfo.userId,
  )}`;
  return <Avatar src={iconurl} radius="xl" />;
};
