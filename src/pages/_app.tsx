import type { AppProps } from 'next/app';
import { IntlProvider } from 'src/utils/reactIntl';
import English from 'src/lang/en.json';
import French from 'src/lang/fr.json';
import { Provider } from 'react-redux';
import { persistor, store } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const locale = 'en-US';
const lang = English;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider locale={locale} messages={lang}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </IntlProvider>
  );
};

export default App;
