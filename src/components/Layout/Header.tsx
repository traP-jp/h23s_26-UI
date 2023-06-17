import { css } from '@emotion/react';
import {
  Header as MantineHeader,
  Container,
  Group,
  rem,
  useMantineTheme,
  MediaQuery,
} from '@mantine/core';

import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { links } from './links';
import { pagesPath } from '@/lib/$path';

type HeaderLinkProps = {
  href: string;
  children: ReactNode;
  active: boolean;
};

const HeaderLink: FC<HeaderLinkProps> = ({ href, children, active }) => {
  const theme = useMantineTheme();

  return (
    <Link
      href={href}
      css={css`
        display: flex;
        align-items: center;
        padding: ${rem(8)} ${rem(12)};
        border-radius: ${theme.radius.sm};
        color: ${theme.colors.gray[7]};
        font-size: ${theme.fontSizes.sm};
        font-weight: 500;
        gap: ${rem(4)};
        line-height: 1;
        text-decoration: none;

        &:hover {
          background-color: ${theme.colors.gray[1]};
        }

        ${active &&
        css`
          /* stylelint-disable-next-line no-descending-specificity */
          &,
          &:hover {
            background-color: ${theme.fn.variant({
              variant: 'light',
              color: theme.primaryColor,
            }).background};
            color: ${theme.fn.variant({
              variant: 'light',
              color: theme.primaryColor,
            }).color};
          }
        `}
      `}
    >
      {children}
    </Link>
  );
};

export const Header: FC = () => {
  const { pathname } = useRouter();
  const theme = useMantineTheme();

  const items = links.map((link) => (
    <HeaderLink
      key={link.label}
      href={link.link}
      active={link.link === pathname}
    >
      <link.Icon size="1.125rem" />
      <span>{link.label}</span>
    </HeaderLink>
  ));

  return (
    <MantineHeader
      height={{ base: 40, sm: 60 }}
      css={css`
        position: relative;
        z-index: 1;
      `}
    >
      <Container
        css={css`
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <Link
          href={pagesPath.$url()}
          css={css`
            padding: ${rem(8)} ${rem(12)};
            border-radius: ${theme.radius.sm};
            color: ${theme.colors.dark[5]};
            font-weight: bold;
            text-decoration: none;

            &:hover {
              background-color: ${theme.colors.gray[1]};
            }
          `}
        >
          ★ traP Mission
        </Link>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group spacing={5}>{items}</Group>
        </MediaQuery>
      </Container>
    </MantineHeader>
  );
};
