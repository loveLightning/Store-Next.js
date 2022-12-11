import { Provider } from 'react-redux'
import { MainLayout } from 'src/components'
import { store } from '../src/store'

export default function HomePage() {

  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  )
}
1