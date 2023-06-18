import type { FC, ReactNode } from 'react';
import { Notification } from '@/components/Notification/Notification';
import { useNotification } from '@/components/Notification/useNotification';

type NotificationProviderProps = {
  children: ReactNode;
};

export const NotificationProvider: FC<NotificationProviderProps> = ({
  children,
}) => {
  const { notifications } = useNotification();

  return (
    <>
      {children}
      {notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </>
  );
};
