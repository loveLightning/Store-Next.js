import twitter from "../../../public/img/twitter.svg";
import instagram from "../../../public/img/instagram.svg";
import facebook from "../../../public/img/facebook.svg";

export interface ISocial {
    img: string,
    link: string
}

export const social: ISocial[] = [
    {
        img: twitter,
        link: 'https://twitter.com/?lang=ru'
    },
    {
        img: instagram,
        link: 'https://www.instagram.com/'
    },
    {
        img: facebook,
        link: 'https://ru-ru.facebook.com/'
    }
]
