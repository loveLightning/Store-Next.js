import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { MainLayout } from 'src/components'
import { store } from '../src/store/store'

export default function HomePage() {
  return {}
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Provider store={store}>
      <MainLayout>{page}</MainLayout>
    </Provider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const categories = await res.json()

  return {
    props: {
      categories,
    },
  }
}