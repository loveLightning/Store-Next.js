import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store/store";
import "../styles/global.sass";
import Header from "../app/components/Header/index";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </Provider>
  );
}
