import { Avatar, Skeleton } from '@mantine/core';
import type { FC } from 'react';
import { useUserInfo } from '@/hooks/useUserInfo';

type UserAvatarProps = {
  userId: string;
  iconSize: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const UserAvatar: FC<UserAvatarProps> = ({ userId, iconSize }) => {
  const iconUrl = `https://q.trap.jp/api/v3/public/icon/${encodeURIComponent(
    userId,
  )}`;
  return <Avatar src={iconUrl} size={iconSize} />;
};

export const MyUserAvatar: FC<Omit<UserAvatarProps, 'userId'>> = (props) => {
  const info = useUserInfo();

  if (info === undefined) return null;

  const { userId } = info;

  if (userId === undefined) return <Skeleton circle />;

  return <UserAvatar userId={userId} {...props} />;
};
