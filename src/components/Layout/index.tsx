import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';

import { Header } from './Header';
import { MobileFooter } from './MobileFooter';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { asPath } = useRouter();
  const theme = useMantineTheme();

  return (
    <>
      <Header />
      <motion.div
        key={asPath}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
      >
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
      </motion.div>
      <div
        css={css`
          position: fixed;
          z-index: 100;
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
