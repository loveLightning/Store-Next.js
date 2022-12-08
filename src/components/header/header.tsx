import s from './styled.module.sass'
import Image from 'next/image'
import logo from '../../../public/img/logo.svg'
import Link from 'next/link'
import React from 'react'
import { menuItem, menuNav } from './types'
import { ActiveLink } from '../active-link'

export const Header = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.logo}>
            <Link href={'/'}>
              <a>
                <Image src={logo} alt="logo"></Image>
              </a>
            </Link>
          </div>
          <nav className={s.wrapper}>
            <ul className={s.category}>
              {menuNav?.map((link) => (
                <li key={link.id}>
                  <ActiveLink path={`/${link.href}`}>
                    {link.title}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.logics}>
            {menuItem.map((img) => (
              <Link key={img.id} href={img.href}>
                <a>
                  <Image priority className={s.image} src={img.img} alt={img.name}></Image>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={s.line}></div>
    </>
  )
}
