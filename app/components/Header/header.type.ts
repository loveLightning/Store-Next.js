export interface IMenu {
  id: number,
  href: string,
  title: string
}

export const menu: IMenu[] = [
  {
    id: 0,
    href: "",
    title: "All products",
  },
  {
    id: 1,
    href: "men",
    title: "Men",
  },
  {
    id: 2,
    href: "women",
    title: "Women",
  },
  {
    id: 3,
    href: "jewelery",
    title: "Jewelery",
  },
  {
    id: 4,
    href: "electronics",
    title: "Electronics",
  },
];

export interface ILogics {
  img: string,
  href: string
}
import basket from "../../../public/img/basket.svg";
import heart from "../../../public/img/heart.svg";
import user from "../../../public/img/user.svg";

export const logics: ILogics[] = [
  {
    img: basket,
    href: "/",
  },
  {
    img: heart,
    href: "/",
  },
  {
    img: user,
    href: "/",
  }
];


