import type { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { MainLayout } from 'src/components'
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
