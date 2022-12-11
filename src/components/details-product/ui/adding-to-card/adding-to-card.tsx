import React, { useState } from 'react'
import Image from 'next/image'
import s from './styled.module.sass'
import minus from '../../../../../public/img/minus.svg'
import plus from '../../../../../public/img/plus.svg'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { GoodsTypes } from 'src/types'
import { addProductToBasket } from 'src/store'

interface Props {
  product: GoodsTypes
}

export const AddingToCard = ({ product }: Props) => {
  const router = useRouter()
  const dispath = useDispatch()
  const [count, setCount] = useState<number>(1)

  const incrementHandler = () => {
    setCount(count + 1)
  }

  const decrementHandler = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const getDataForBasket = () => {
    router.push(`/cart`)

    if (product) {
      dispath(addProductToBasket({ basket: product, count }))
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <Image
          onClick={decrementHandler}
          className={s.minus}
          src={minus}
          width="18px"
          height="18px"
          priority
          alt="remove"
        ></Image>
        <div className={s.count}>{count}</div>
        <Image
          onClick={incrementHandler}
          className={s.plus}
          src={plus}
          width="18px"
          height="18px"
          priority
          alt="add"
        ></Image>
      </div>
      <div className={s.right}>
        <button onClick={getDataForBasket} className={s.add}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

