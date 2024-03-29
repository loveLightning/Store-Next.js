import type { AppProps } from 'next/app'
import '../styles/global.sass'
import { Provider } from 'react-redux'
import { store } from 'src/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
