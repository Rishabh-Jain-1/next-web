import type { AppProps } from 'next/app';
import { IntlProvider } from 'src/utils/reactIntl';
import English from 'src/lang/en.json';
import French from 'src/lang/fr.json';

const locale = 'en-US';
const lang = English;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider locale={locale} messages={lang}>
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default App;
