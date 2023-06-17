import { css } from '@emotion/react';
import type { FC, ReactNode } from 'react';
import { Header } from '@/components/Header';
import { MobileFooter } from '@/components/MobileFooter';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        css={css`
          max-width: 960px;
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

          @media screen and (min-width: 541px) {
            display: none;
          }
        `}
      >
        <MobileFooter />
      </div>
    </>
  );
};
