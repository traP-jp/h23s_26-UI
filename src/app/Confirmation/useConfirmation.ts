import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

const confirmationDialogShownAtom = atom(false);
const confirmationMessageAtom = atom('');
const confirmationHandlersAtom = atom<{
  onConfirm: () => void;
  onCancel: () => void;
}>({
  onConfirm: () => void 0,
  onCancel: () => void 0,
});

export const useConfirmation = () => {
  const [confirmationDialogShown, setConfirmationDialogShown] = useAtom(
    confirmationDialogShownAtom,
  );
  const [confirmationMessage, setConfirmationMessage] = useAtom(
    confirmationMessageAtom,
  );
  const [confirmationHandlers, setConfirmationHandlers] = useAtom(
    confirmationHandlersAtom,
  );

  const closeConfirmationDialog = useCallback(() => {
    setConfirmationDialogShown(false);
  }, [setConfirmationDialogShown]);

  const openConfirmationDialog = useCallback(
    ({
      message,
      onConfirm,
      onCancel,
    }: {
      message: string;
      onConfirm: () => void;
      onCancel: () => void;
    }) => {
      setConfirmationMessage(message);
      setConfirmationHandlers({
        onConfirm: () => {
          onConfirm();
          closeConfirmationDialog();
        },
        onCancel: () => {
          onCancel();
          closeConfirmationDialog();
        },
      });
      setConfirmationDialogShown(true);
    },
    [
      closeConfirmationDialog,
      setConfirmationDialogShown,
      setConfirmationHandlers,
      setConfirmationMessage,
    ],
  );

  return {
    confirmationDialogShown,
    openConfirmationDialog,
    closeConfirmationDialog,
    confirmationHandlers,
    confirmationMessage,
  };
};
