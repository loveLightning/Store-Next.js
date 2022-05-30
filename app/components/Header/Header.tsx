import s from "./styled.module.sass";
import Image from "next/image";
import logo from "../../../public/img/logo.svg";
import basket from "../../../public/img/basket.svg";
import heart from "../../../public/img/heart.svg";
import user from "../../../public/img/user.svg";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { menu } from "./header.type";

interface IHeader {
  children: React.ReactNode[] | React.ReactNode;
}

const Header: React.FC<IHeader>= () => {
    const [activeItem, setActiveItem] = useState<number>();
  return (
    <>
          <div className={s.container}>
        <div className={s.header}>
          <div className={s.logo}>
            <Link href={"/"}>
              <a>
                <Image src={logo}></Image>
              </a>
            </Link>
          </div>
          <div className={s.wrapper}>
            <ul className={s.category}>
              {menu?.map((link, idx: number) => (
                <li key={link.id}>
                  <Link href={`/${link.href}`}>
                    <a
                      className={
                        activeItem === idx
                          ? `${s.link} ${s.active}`
                          : `${s.link}`
                      }
                      onClick={() => setActiveItem(idx)}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.logics}>
            <Link href={"/"}>
              <a>
                <Image priority className={s.image} src={basket}></Image>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <Image priority className={s.image} src={heart}></Image>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <Image priority className={s.image} src={user}></Image>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={s.line}></div>
    </>
  )
}

export default Header