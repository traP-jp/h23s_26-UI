import { useUserInfo } from '@/hooks/useUserInfo';

export const useMyAchievesCount = () => {
  const { data } = useUserInfo();

  return data?.achieves.length;
};
