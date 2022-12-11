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
    title: 'All items',
  },
  {
    id: 1,
    href: "category/men's clothing",
    title: 'Men',
  },
  {
    id: 2,
    href: "category/women's clothing",
    title: 'Women',
  },
  {
    id: 3,
    href: 'category/jewelery',
    title: 'Jewelery',
  },
  {
    id: 4,
    href: 'category/electronics',
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
    href: '/cart',
    name: 'user',
  },
]
