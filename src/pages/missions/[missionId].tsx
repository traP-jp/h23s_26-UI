import { css } from '@emotion/react';
import {
  Button,
  Center,
  Flex,
  Loader,
  Skeleton,
  Space,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { z } from 'zod';
import { Description } from '@/components/Description';
import { Layout } from '@/components/Layout';
import { useNotification } from '@/components/Notification/useNotification';
import { UserAvatar } from '@/components/UserAvatar';
import { useClearAnimation } from '@/hooks/useClearAnimation';
import { useUserInfo } from '@/hooks/useUserInfo';
import { fetcher } from '@/lib/fetcher';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';
import type {
  GetMissionResponse,
  PatchUserMissionRequest,
} from '@/schema/schema';

type MissionPageProps = {
  missionName: string;
};

const Mission: NextPage<MissionPageProps> = ({ missionName }) => {
  const theme = useMantineTheme();
  const { missionId } = useRouter().query as { missionId: string };
  const { data } = useSWR<GetMissionResponse>(
    `${getApiBaseUrl()}/missions/${missionId}`,
    fetcher,
  );
  const { userId } = useUserInfo() ?? { userId: undefined };
  const { notify } = useNotification();
  const { animate, Canvas } = useClearAnimation();

  const toggleClearHandler = async () => {
    if (data === undefined) return;
    if (userId === undefined) return;

    const clear = userId ? !data.achievers.includes(userId) : false;

    const body: PatchUserMissionRequest = {
      clear,
      clearedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(
        `${getApiBaseUrl()}/users/${userId}/missions/${missionId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );

      if (!res.ok) {
        return notify({
          title: 'エラーが発生しました',
          variant: 'error',
        });
      }

      if (clear) {
        animate();
      }
    } catch (error) {
      return notify({
        title: 'エラーが発生しました',
        variant: 'error',
      });
    }
  };

  return (
    <>
      <Description
        title={`Mission ${missionName} | traP Mission`}
        description="数々のミッションをこなし、一流のtraPerになろう！"
      />
      <Layout>
        <Canvas />
        <div>
          <h1
            css={css`
              padding: 0.25rem 1rem;
              border-bottom: 1px solid ${theme.colors.gray[2]};
              font-size: 1.5rem;
              line-height: 2rem;
            `}
          >
            {data ? (
              data.name
            ) : (
              <Skeleton width="70%" height="2rem" radius="xl" />
            )}
          </h1>

          <div
            css={css`
              padding: 1rem;
            `}
          >
            {data ? (
              <Text
                color="dimmed"
                css={css`
                  line-height: 1.15rem;
                `}
              >
                {data.description}
              </Text>
            ) : (
              <Skeleton width="100%" height="1.15rem" radius="xl" />
            )}
          </div>

          <Space h="xl" />

          <Center>
            <div>
              {data ? (
                userId !== undefined && data.achievers.includes(userId) ? (
                  <Stack>
                    <Button variant="filled" size="lg" disabled>
                      クリア済み
                    </Button>
                    <Button
                      variant="white"
                      size="xs"
                      onClick={toggleClearHandler}
                    >
                      キャンセルする
                    </Button>
                  </Stack>
                ) : (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={toggleClearHandler}
                  >
                    クリアする
                  </Button>
                )
              ) : (
                <Text
                  color="dimmed"
                  css={css`
                    display: flex;
                    align-items: center;
                    gap: 4px;
                  `}
                >
                  <Loader variant="oval" size="sm" />
                  取得中
                </Text>
              )}
            </div>
          </Center>

          <Space h="xl" />

          <div>
            <h2
              css={css`
                padding: 0.25rem 1rem;
                color: ${theme.colors.dark[6]};
                font-size: 1.25rem;
              `}
            >
              達成した人
            </h2>
            <Flex p="1rem" gap="md">
              {data
                ? data.achievers.map((achiever) => (
                    <UserAvatar
                      userId={achiever}
                      key={achiever}
                      iconSize="lg"
                    />
                  ))
                : new Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Skeleton key={i} width="56px" height="56px" />
                    ))}
            </Flex>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Mission;

export const getStaticProps: GetStaticProps<MissionPageProps> = async ({
  params,
}) => {
  const param = z.object({ missionId: z.string() }).safeParse(params);
  if (!param.success) {
    return {
      props: {
        missionName: '',
      },
      revalidate: 60,
    };
  }

  const res = await fetch(
    `${getApiBaseUrl()}/missions/${param.data.missionId}`,
  );
  // TODO: zodの型とTypeScriptの型をz.inferで同期させる
  const missionResponse = z
    .object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      achievers: z.array(z.string()),
    })
    .safeParse(await res.json());

  if (!missionResponse.success) {
    return {
      props: {
        missionName: 'Mission',
      },
      revalidate: 60,
    };
  }

  return {
    props: {
      missionName: missionResponse.data.name,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
