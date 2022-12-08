import React from 'react'
import Datails from '../../src/components/Details/Details'
import { Provider } from 'react-redux'
import { store } from '../../src/store/store'
import { InferGetStaticPropsType } from 'next'

const DetailsPage = ({ products }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <Provider store={store}>
      <Datails products={products} />
    </Provider>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return { props: { products } }
}

export default React.memo(DetailsPage)
