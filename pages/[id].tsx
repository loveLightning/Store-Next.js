import type { ReactElement } from 'react'
import MainLayout from '../src/components/main-layout/main-layout'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

export default function Index() {
  return {}
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Provider store={store}>
      <MainLayout>{page}</MainLayout>
    </Provider>
  )
}
