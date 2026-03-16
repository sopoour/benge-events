import React from 'react';
import { AppProps } from 'next/app';
import Layout from '@app/components/layout/Layout';
import '@mantine/core/styles.css';
import { GlobalStyle } from '@app/styles/global';
import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';
import theme from '@app/styles/theme';
import { MantineProvider } from '@mantine/core';
import { Analytics } from '@vercel/analytics/next';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MantineProvider withGlobalClasses withCssVariables forceColorScheme="light">
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </MantineProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
