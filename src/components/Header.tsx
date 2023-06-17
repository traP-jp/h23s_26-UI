import { css } from '@emotion/react';
import { Header, Container, Group, rem, useMantineTheme } from '@mantine/core';

import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { pagesPath } from '@/lib/$path';

const HEADER_HEIGHT = rem(60);

const links = [
  { link: '/dashboard', label: 'DashBoard' },
  { link: '/missions', label: 'Missions' },
  { link: 'ranking', label: 'Ranking' },
];

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
        display: block;
        padding: ${rem(8)} ${rem(12)};
        border-radius: ${theme.radius.sm};
        color: ${theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.colors.gray[7]};
        font-size: ${theme.fontSizes.sm};
        font-weight: 500;
        line-height: 1;
        text-decoration: none;

        &:hover {
          background-color: ${theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0]};
        }

        @media screen and (max-width: ${theme.breakpoints.sm}) {
          padding: ${theme.spacing.md};
          border-radius: 0;
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

export function HeaderResponsive() {
  const theme = useMantineTheme();
  const { pathname } = useRouter();

  const items = links.map((link) => (
    <HeaderLink
      key={link.label}
      href={link.link}
      active={pathname === link.link}
    >
      {link.label}
    </HeaderLink>
  ));

  return (
    <Header
      height={HEADER_HEIGHT}
      mb={120}
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
              background-color: ${theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0]};
            }
          `}
        >
          ★ traP Mission
        </Link>
        <div
          css={css`
            @media screen and (max-width: 540px) {
              display: none;
            }
          `}
        >
          <Group spacing={5}>{items}</Group>
        </div>
      </Container>
    </Header>
  );
}
