import React from 'react'
import s from './styled.module.sass'
import Image from 'next/image'
import { social } from './types'

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.line}></div>
      <ul className={s.social}>
        <li>Don’t missout on once-in-a-while-deals:</li>
        {social.map((item) => (
          <li key={item.id} className={s.item}>
            <a
              className={s.link}
              target="_blank"
              href={item.link} rel="noreferrer"
            >
              <Image src={item.img} height="16px" width="16px" alt='net'></Image>
            </a>
          </li>
        ))}
      </ul>
      <div className={s.politics}>
        <div>Support line: +250 788 467 808</div>
        <div>Copyright 2021 © Sneaker City ltd</div>
      </div>
    </div>
  )
}

