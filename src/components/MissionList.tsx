import { css } from '@emotion/react';
import { Card, Overlay, useMantineTheme, Text, Skeleton } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import type { FC } from 'react';
import type { GetMissionResponse, GetUserResponse } from '@/schema/schema';

export type MissionListProps = {
  missions?: GetMissionResponse[];
  user?: GetUserResponse;
};

export const MissionList: FC<MissionListProps> = ({ missions, user }) => {
  const theme = useMantineTheme();

  return (
    <div
      css={css`
        display: grid;
        margin-top: ${theme.spacing.md};
        gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      `}
    >
      {missions
        ? missions.map((mission) => (
            <Link
              href={`/missions/${mission.id}`}
              key={mission.id}
              css={css`
                color: inherit;
                text-decoration: none;
              `}
            >
              <Card
                shadow="xs"
                padding="lg"
                css={css`
                  transition: all 0.2s;

                  &:hover {
                    box-shadow: ${theme.shadows.sm};
                    opacity: 0.8;
                  }
                `}
              >
                {user?.achieves.includes(mission.id) && (
                  <Overlay
                    css={css`
                      display: grid;
                      background-color: ${theme.fn.rgba(theme.white, 0.8)};
                      color: ${theme.colors.lime[5]};
                      place-items: center;
                    `}
                  >
                    <IconCheck size="5rem" />
                  </Overlay>
                )}
                <Text fw="500" lineClamp={1} className="mission-title">
                  {mission.name}
                </Text>
                <Text
                  color="dimmed"
                  lineClamp={2}
                  h="3rem"
                  className="mission-description"
                >
                  {mission.description}
                </Text>
              </Card>
            </Link>
          ))
        : new Array(3).fill(0).map((_, i) => <Skeleton h={90} key={i} />)}
    </div>
  );
};
