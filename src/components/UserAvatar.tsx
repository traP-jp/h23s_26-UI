import { Avatar } from '@mantine/core';
import type { FC } from 'react';
import { useUserInfo } from '@/hooks/useUserInfo';

type UserAvatarProps = {
  iconSize: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const UserAvatar: FC<UserAvatarProps> = ({ iconSize }) => {
  const { userId } = useUserInfo();
  const iconUrl = `https://q.trap.jp/api/v3/public/icon/${encodeURIComponent(
    userId,
  )}`;
  return <Avatar src={iconUrl} size={iconSize} />;
};
