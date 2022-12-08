import React from 'react'
import { Provider } from 'react-redux'
import { Header } from '../../src/components'
import Cart from '../../src/components/Cart/Cart'
import { store } from '../../src/store/store'

const Index: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>
    </>
  )
}

export default Index
