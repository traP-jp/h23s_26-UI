import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';

import { Header } from './Header';
import { MobileFooter } from './MobileFooter';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <>
      <Header />
      <main
        css={css`
          max-width: ${theme.breakpoints.md};
          flex: 1;
          padding: 1rem;
          margin: 0 auto;
        `}
      >
        {children}
      </main>
      <div
        css={css`
          position: fixed;
          right: 0;
          bottom: 0;
          left: 0;

          ${theme.fn.largerThan('sm')} {
            display: none;
          }
        `}
      >
        <MobileFooter />
      </div>
    </>
  );
};
