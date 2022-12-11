import React from 'react'
import { Header, Goods, Footer } from 'src/components'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Goods />
          <Footer />
        </div>
      </main>
    </>
  )
}

export const MainLayout = React.memo(Layout)