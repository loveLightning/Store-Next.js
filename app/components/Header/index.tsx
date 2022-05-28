import s from "./index.module.sass";
import Image from "next/image";
import logo from "../../../public/img/logo.svg";
import basket from "../../../public/img/basket.svg";
import heart from "../../../public/img/heart.svg";
import user from "../../../public/img/user.svg";
import Link from "next/link";
import { SetStateAction, useState } from "react";

interface IHeader {
  children: React.ReactNode[] | React.ReactNode;
}

const menu = [
  {
    id: 0,
    href: '/',
    title: 'New arrivals'
  },
  {
    id: 1,
    href: '/men',
    title: 'Men'
  },
  {
    id: 2,
    href: '/women',
    title: 'Women'
  },
  {
    id: 3,
    href: '/jewelery',
    title: 'Jewelery'
  },
  {
    id: 4,
    href: '/electronics',
    title: 'Electronics'
  }
]

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.logo}>
            <Image src={logo}></Image>
          </div>
          <div className={s.wrapper}>
            <ul className={s.category}>
              {menu?.map((link) => (
              <li key={link.id}>
                <Link href={`${link.href}`}>
                  <a className={s.link}>{link.title}</a>
                </Link>
              </li>
              ))}
            </ul>
          </div>
          <div className={s.logics}>
            <Link href={"/"}>
              <a>
                <Image className={s.image} src={basket}></Image>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <Image className={s.image} src={heart}></Image>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <Image className={s.image} src={user}></Image>
              </a>
            </Link>
          </div>
        </div>
        
      </div>
      <div className={s.line}></div>
      <main>{children}</main>
    </>
  );
};

export default Header;
