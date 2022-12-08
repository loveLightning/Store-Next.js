export type Root = Root2[]

export interface Root2 {
  dataBasket: DataBasket
  count: number
}

export interface DataBasket {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}
