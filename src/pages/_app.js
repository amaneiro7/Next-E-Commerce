import '@styles/global.css';
import Header from '@components/Header';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function MyApp({ Component, pageProps }) {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}