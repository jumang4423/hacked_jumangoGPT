import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <div className={inter.className}>
      <link
        href="https://pvinis.github.io/iosevka-webfont/3.4.1/iosevka.css"
        rel="stylesheet"
      />
      <Toaster />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
