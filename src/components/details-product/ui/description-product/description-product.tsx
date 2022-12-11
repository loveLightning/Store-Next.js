import React from 'react'
import s from './styled.module.sass'
import arrowUp from '../../../../../public/img/arrow-up.svg'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  desc: string | undefined
}

export const DescriptionProduct = ({ desc }: Props) => {
  const [active, setActive] = useState(false)

  const toggleDesc = () => {
    setActive(!active)
  }

  return (
    <div>
      <div className={s.desc}>
        <p className={s['desc-title']}>Description</p>
        <div className={active ? `${s.arrow} ${s.active}` : `${s.arrow}`}>
          <Image
            onClick={toggleDesc}
            className={s.arrowUp}
            src={arrowUp}
            height="16px"
            width="16px"
            priority
            alt="arrow"
          ></Image>
        </div>
      </div>
      <div className={s['desc-inner']}>
        {!active && desc ? desc?.split('').splice(0, 70).join('') + '...' : desc}
      </div>
      <div className={s.line}></div>
    </div>
  )
}

