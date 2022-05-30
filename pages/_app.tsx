import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store/store";
import "../styles/global.sass";
import MainLayout from '../app/components/MainLayout/index'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <MainLayout>
        <Component {...pageProps} />
        </MainLayout>
      </Provider>
  );
}
