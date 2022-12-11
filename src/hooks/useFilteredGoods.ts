import { GoodsTypes } from 'src/types'

export const useFilteredGoods = (goods: GoodsTypes[]) => {
  const products: GoodsTypes[] = [...goods]

  if (goods) {
    return products
  }
}
