import {
  Dialog,
  useMantineTheme,
  Notification as MantineNotification,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAlertTriangle, IconCheck, IconX } from '@tabler/icons-react';
import { useEffect, type FC, useCallback } from 'react';
import {
  useNotification,
  type NotificationState,
} from '@/components/Notification/useNotification';

type NotificationType = {
  notification: NotificationState;
};

const icons = {
  default: null,
  error: IconX,
  success: IconCheck,
  warning: IconAlertTriangle,
};

export const Notification: FC<NotificationType> = ({ notification }) => {
  const theme = useMantineTheme();
  const [opened, handlers] = useDisclosure(false);
  const { removeNotification } = useNotification();

  const close = useCallback(() => {
    handlers.close();

    setTimeout(() => {
      removeNotification(notification.id);
    }, 300);
  }, [handlers, notification.id, removeNotification]);

  const open = handlers.open;

  useEffect(() => {
    console.log('open');

    open();
  }, [open]);

  const Icon = icons[notification.variant];
  const colors = {
    default: theme.primaryColor,
    error: 'red',
    success: 'green',
    warning: 'yellow',
  };
  const color = colors[notification.variant];

  return (
    <Dialog opened={opened} shadow="none" p={0}>
      <MantineNotification
        title={notification.title}
        icon={Icon && <Icon size="1.1rem" />}
        color={color}
        onClose={close}
      >
        {notification.description}
      </MantineNotification>
    </Dialog>
  );
};
