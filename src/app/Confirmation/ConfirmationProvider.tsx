import { css } from '@emotion/react';
import {
  Overlay,
  useMantineTheme,
  Text,
  Button,
  Group,
  Stack,
} from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useConfirmation } from '@/app/Confirmation/useConfirmation';

type ConfirmationProvider = {
  children: ReactNode;
};

export const ConfirmationProvider: FC<ConfirmationProvider> = ({
  children,
}) => {
  const theme = useMantineTheme();
  const { confirmationDialogShown, confirmationHandlers, confirmationMessage } =
    useConfirmation();

  return (
    <>
      {children}
      {confirmationDialogShown && (
        <Overlay
          color={theme.fn.rgba(theme.white, 0.8)}
          blur={10}
          p="lg"
          center
        >
          <Stack align="center">
            <Text
              fw="bold"
              maw="40rem"
              css={css`
                white-space: pre-line;
              `}
            >
              {confirmationMessage}
            </Text>
            <Group align="right">
              <Button variant="outline" onClick={confirmationHandlers.onCancel}>
                キャンセル
              </Button>
              <Button variant="filled" onClick={confirmationHandlers.onConfirm}>
                確認
              </Button>
            </Group>
          </Stack>
        </Overlay>
      )}
    </>
  );
};
