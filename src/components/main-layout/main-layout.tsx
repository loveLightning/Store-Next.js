import { Header } from '../header'
import OtherProducts from '../Home/OtherProducts'

interface Props {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <main>
        <OtherProducts />
      </main>
    </>
  )
}

