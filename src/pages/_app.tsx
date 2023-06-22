import 'ress';
import '@/styles/global.css';
import { MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { ConfirmationProvider } from '@/app/Confirmation/ConfirmationProvider';
import { GoogleTagManagerBody } from '@/components/GoogleTagManager';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManagerBody />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          breakpoints: {
            xs: '28em',
            sm: '36em',
            md: '64em',
            lg: '74em',
            xl: '90em',
          },
          primaryColor: 'cyan',
        }}
      >
        <AnimatePresence mode="wait" initial>
          <ConfirmationProvider>
            <Component {...pageProps} />
          </ConfirmationProvider>
        </AnimatePresence>
      </MantineProvider>
    </>
  );
}

export default MyApp;
