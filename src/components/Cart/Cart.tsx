import React, { useEffect, useState } from 'react'
import s from './styled.module.sass'
import Image from 'next/image'
import minus from '../../../public/img/minus.svg'
import plus from '../../../public/img/plus.svg'
import { increment, decrement, removeProduct, basketSelector, useAppDispatch, useAppSelector } from 'src/store'
import { Footer } from 'src/components'
import Link from 'next/link'

export const Cart = () => {

  const baskets = useAppSelector(basketSelector)

  const [sumProducts, setSumProducts] = useState<number>(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let sumresult = 0

    if (baskets) {
      for (let i = 0; i < baskets.length; i++) {
        if (baskets[i].basket.price) {
          sumresult += baskets[i].count * baskets[i].basket.price
        }
      }
    }
    setSumProducts(sumresult)

  }, [baskets])

  const counterDecrement = (id: number) => {
    dispatch(decrement(id))
  }

  const counterIncrement = (id: number) => {
    dispatch(increment(id))
  }

  const removeItem = (id: number) => {
    dispatch(removeProduct(id))
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s['left-content']}>
            <h3 className={s.title}>Your shopping cart</h3>

            {baskets.length ? baskets.map((product, id) => (
              <div key={id} className={s.product}>
                <div className={s['product-inner']}>
                  <div onClick={() => removeItem(id)} className={s.close}>&times;</div>
                  <div className={s.content}>
                    <Image
                      height="80px"
                      width="96px"
                      src={product.basket.image}
                      className={s.image}
                      priority
                      objectFit='contain'
                      alt='img'
                    ></Image>
                    <div className={s['title-wrapper']}>
                      <p className={s['title-inner']}>
                        {String(product.basket.title)
                          .split(' ')
                          .splice(0, 3)}
                        ...
                      </p>
                      <p className={s['price-down']}>
                        {product.basket.price}$
                      </p>
                    </div>
                  </div>
                  <div className={s.count}>
                    <Image
                      onClick={() => counterDecrement(id)}
                      className={s.minus}
                      src={minus}
                      width="18px"
                      height="18px"
                      priority
                      alt='img'
                    ></Image>
                    <div className={s.count}>{product.count}</div>
                    <Image
                      onClick={() => counterIncrement(id)}
                      className={s.plus}
                      src={plus}
                      width="18px"
                      height="18px"
                      priority
                      alt='img'
                    ></Image>
                  </div>
                  <div>

                    <p>{product.basket.price && (product.basket.price * product.count).toFixed(2)}$</p>
                  </div>
                </div>
              </div>
            )) : <>
              <p>Cart is empty</p>
              <Link href='/'>Do you want to add products?</Link>
            </>}

          </div>
          <div className={s['right-content']}>
            <p className={s.order}>Order summary</p>
            <div className={s.total}>
              <p className={s['sub-total']}>Sub total</p>
              <p className={s['price']}>${sumProducts.toFixed(2)}</p>
            </div>
            <div className={s.fee}>
              <p className={s['sub-total']}>Delivery fee</p>
              <p className={s['price']}>0$</p>
            </div>
            <div className={s.line}></div>
            <div className={s.result}>${sumProducts.toFixed(2)}</div>
            <div className={s.btn}>
              <button className={s['btn-pay']}>Proceed to checkout</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
