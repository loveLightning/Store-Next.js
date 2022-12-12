import twitter from '../../../public/img/twitter.svg'
import instagram from '../../../public/img/instagram.svg'
import facebook from '../../../public/img/facebook.svg'

interface socialNetworkTypes {
  id: string
  img: string
  link: string
}

export const social: socialNetworkTypes[] = [
  {
    id: '0',
    img: twitter,
    link: 'https://twitter.com/?lang=ru',
  },
  {
    id: '1',
    img: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: '2',
    img: facebook,
    link: 'https://ru-ru.facebook.com/',
  },
]
