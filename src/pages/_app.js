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
            <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
            </Script>
            <AppContext.Provider value={InitialState}>
                <Head>
                    <title>React-e Shop</title>
                    <meta charset="UTF-8" />
                    <meta name="keywords" content="titla, meta, nextjs" />
                    <meta name="author" content="Andres Maneiro" />
                    <meta name="description" content="Mercado de articulos" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Header />
                <Component {...pageProps} />
            </AppContext.Provider>
        </>
    );
}
