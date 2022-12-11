interface Props {
  checked: boolean
  value: number
  name: string
  id: number
}

export const ratingData: Props[] = [
  {
    id: 0,
    value: 2,
    name: 'rating',
    checked: true,
  },
  {
    id: 1,
    value: 3,
    name: 'rating',
    checked: false,
  },
  {
    id: 2,
    value: 4,
    name: 'rating',
    checked: false,
  },
]
