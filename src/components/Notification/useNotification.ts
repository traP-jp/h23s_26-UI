import { atom, useAtom } from 'jotai';
import type { ReactNode } from 'react';

export type NotificationState = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  variant: 'default' | 'error' | 'success' | 'warning';
};

const notificationsAtom = atom<NotificationState[]>([]);

export const useNotification = () => {
  const [notifications, setNotifications] = useAtom(notificationsAtom);

  const notify = (notification: Omit<NotificationState, 'id'>) => {
    const id = Math.random().toString(36).substring(2);
    setNotifications((prev) => [...prev, { ...notification, id }]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return {
    notifications,
    notify,
    removeNotification,
  };
};
