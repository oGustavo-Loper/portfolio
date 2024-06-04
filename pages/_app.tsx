import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Portfolio Gustavo Loper</title>
        <meta name="description" content="Portfolio Gustavo Loper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp