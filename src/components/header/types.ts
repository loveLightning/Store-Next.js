import basket from '../../../public/img/basket.svg'
import heart from '../../../public/img/heart.svg'
import user from '../../../public/img/user.svg'

export interface MenuNavTypes {
  id: number
  href: string
  title: string
}

export interface MenuItemTypes {
  id: string
  img: string
  href: string
  name: string
}

export const menuNav: MenuNavTypes[] = [
  {
    id: 0,
    href: '',
    title: 'All products',
  },
  {
    id: 1,
    href: 'men',
    title: 'Men',
  },
  {
    id: 2,
    href: 'women',
    title: 'Women',
  },
  {
    id: 3,
    href: 'jewelery',
    title: 'Jewelery',
  },
  {
    id: 4,
    href: 'electronics',
    title: 'Electronics',
  },
]

export const menuItem: MenuItemTypes[] = [
  {
    id: '0',
    img: basket,
    href: '/',
    name: 'basket',
  },
  {
    id: '1',
    img: heart,
    href: '/',
    name: 'heart',
  },
  {
    id: '2',
    img: user,
    href: '/',
    name: 'user',
  },
]
