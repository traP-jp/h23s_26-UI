import { Flex, Loader } from '@mantine/core';
import type { FC } from 'react';
import { MissionPanel } from '@/components/DashBoard/MissionPanel';
import { useUserInfo } from '@/hooks/useUserInfo';

export const MyAchieves: FC = () => {
  const { data, error } = useUserInfo();

  if (data == undefined) return <Loader variant="oval" />;

  if (error !== undefined) return <div>Something went wrong</div>;

  return (
    <Flex wrap="wrap" gap="xs" p="lg">
      {data.achieves.map((missionId) => (
        <MissionPanel key={missionId} missionId={missionId} />
      ))}
    </Flex>
  );
};
