import { css } from '@emotion/react';
import {
  Container,
  Text,
  Button,
  Group,
  useMantineTheme,
  rem,
} from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Description } from '@/components/Description';
import { Layout } from '@/components/Layout';
import { pagesPath, staticPath } from '@/lib/$path';

const Home: NextPage = () => {
  const theme = useMantineTheme();

  return (
    <>
      <Description
        title="traP Mission"
        description="数々のミッションをこなし、一流のtraPerになろう！"
      />
      <Layout>
        <div
          css={css`
            position: relative;
          `}
        >
          <Container
            size={700}
            css={css`
              position: relative;
              padding-top: rem(200);
              padding-bottom: rem(120);

              ${theme.fn.smallerThan('sm')} {
                padding-top: rem(80);
                padding-bottom: rem(80);
              }
            `}
          >
            <h1
              css={css`
                padding: 0;
                margin: 0;
                color: ${theme.black};
                font-size: ${rem(62)};
                line-height: 1.1;

                ${theme.fn.smallerThan('sm')} {
                  font-size: rem(42);
                  line-height: 1.2;
                }
              `}
            >
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                inherit
              >
                traP Mission
              </Text>
            </h1>

            <Text
              color="dimmed"
              css={css`
                margin-top: ${theme.spacing.xl};
                font-size: ${rem(24)};

                ${theme.fn.smallerThan('sm')} {
                  font-size: ${rem(18)};
                }
              `}
            >
              数々のミッションをこなし、一流のtraPerになろう！
            </Text>

            <Group
              css={css`
                margin-top: calc(${theme.spacing.xl} * 2);

                ${theme.fn.smallerThan('sm')} {
                  margin-top: ${theme.spacing.xl};
                }
              `}
            >
              <Button
                size="xl"
                variant="gradient"
                component={Link}
                href={pagesPath.missions.$url()}
                gradient={{ from: 'blue', to: 'cyan' }}
                css={css`
                  height: ${rem(54)};
                  padding-right: ${rem(38)};
                  padding-left: ${rem(38)};

                  ${theme.fn.smallerThan('sm')} {
                    height: ${rem(54)};
                    flex: 1;
                    padding-right: ${rem(18)};
                    padding-left: ${rem(18)};
                  }
                `}
              >
                挑戦する
              </Button>
            </Group>

            <div
              css={css`
                position: relative;
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                aspect-ratio: 1/1;
              `}
            >
              <Image src={staticPath.landing_page_image_png} alt="" fill />
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Home;
