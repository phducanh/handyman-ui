import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import axios from 'axios';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';

import '@/styles/globals.css';
// import FlagProvider, { UnleashClient } from '@unleash/proxy-client-react';
import 'antd/dist/antd.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import ModalManager from '@/components/modal';

import { getStripeKey } from '@/api/app-service';
import { StripeKeyGetResponse_Data } from '@/pb/apiservice';
import { store } from '@/reducer/store';
import setupAxios from '@/utils/setupAxios';

axios.create();
setupAxios(axios, store);

const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  const [stripeKey, setStripeKey] = useState<Promise<Stripe | null> | null>(
    null
  );
  useEffect(() => {
    getStripeKey().then((data: StripeKeyGetResponse_Data) => {
      const key: string = data.key;
      setStripeKey(loadStripe(key));
    });
  }, []);
  // const config = {
  //   url: process.env.NEXT_PUBLIC_UNLEASH_URL,
  //   clientKey: process.env.NEXT_PUBLIC_UNLEASH_CLIENT_KEY,
  //   refreshInterval: 15,
  //   appName: process.env.NEXT_PUBLIC_UNLEASH_APP_NAME,
  //   environment: process.env.NEXT_PUBLIC_UNLEASH_ENVIRONMENT,
  // };
  // const client = new UnleashClient(config);
  // const config = {
  //   url: "https://app.unleash-hosted.com/demo/api",
  //   clientKey: "614a75cf68bef8703aa1bd8304938a81ec871f86ea40c975468eabd6",
  //   refreshInterval: 15,
  //   appName: "demo-app",
  //   environment: "production",
  // };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripeKey}>
          <ModalManager />
          <Component {...pageProps} />
        </Elements>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
