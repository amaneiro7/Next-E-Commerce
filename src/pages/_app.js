import Head from 'next/head';
import Script from 'next/script';
import Header from '@components/Header';
import '@styles/global.css';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function MyApp({ Component, pageProps }) {
  const InitialState = useInitialState();
  return (
    <>   
      
    
      <AppContext.Provider value={InitialState}>
        <Head>
          <title>React-e Shop</title>
          <meta charset="UTF-8" />
          <meta name="keywords" content="titla, meta, nextjs" />
          <meta name="author" content="Andres Maneiro" />
          <meta name="description" content="Mercado de articulos" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        Google tag (gtag.js)
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TM21YTEWZD"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date());

          gtag('config', 'G-TM21YTEWZD');
        </script>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}