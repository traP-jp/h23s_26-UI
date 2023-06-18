import { css } from '@emotion/react';
import { Anchor, Flex, rem, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '@/components/Layout/links';

export const MobileFooter = () => {
  const { pathname } = useRouter();
  const theme = useMantineTheme();

  const items = links.map((link) => {
    const active = link.link === pathname;

    return (
      <Anchor
        component={Link}
        color={active ? theme.primaryColor : theme.colors.gray[6]}
        key={link.label}
        href={link.link}
        size="sm"
        css={css`
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0;
          font-weight: ${active ? 700 : 600};
          gap: 4px;
          line-height: 1;

          &:not(:last-of-type) {
            border-right: ${rem(1)} solid ${theme.colors.gray[3]};
          }
        `}
      >
        <link.Icon size="1.125rem" />
        <span>{link.label}</span>
      </Anchor>
    );
  });

  return (
    <div
      css={css`
        border-top: ${rem(1)} solid ${theme.colors.gray[3]};
        background-color: ${theme.white};
      `}
    >
      <Flex justify="center">{items}</Flex>
    </div>
  );
};
