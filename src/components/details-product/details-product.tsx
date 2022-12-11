import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import s from './styled.module.sass'
import Image from 'next/image'
import heart from '../../../public/img/heart.svg'
import heartActive from '../../../public/img/heart-active.svg'
import { fetchProduct, useAppSelector, useAppDispatch, productSelector } from 'src/store'
import { Loader } from 'src/components'
import { AddingToCard, Carousel, DescriptionProduct } from './ui'

export const DetailsProduct = () => {
  const router = useRouter()
  const routerPath = router.query.id?.toString()
  const { data: product, loading, error } = useAppSelector(productSelector)
  const dispatch = useAppDispatch()
  const [activeHeart, setActiveHeart] = useState(false)

  useEffect(() => {
    if (routerPath) dispatch(fetchProduct(routerPath))

  }, [dispatch, routerPath])

  const toggleActiveHeart = () => {
    setActiveHeart(!activeHeart)
  }

  return (
    <>
      {loading && <Loader />}

      {product && !loading && <div className={s['wrapper-bg']}>
        <div className={s['left-bg']}>
          <div className={s['bg-slider']}>
            <Carousel product={product} />
          </div>
        </div>

        <div onClick={toggleActiveHeart} className={s['heart-wrapper']}>
          {activeHeart ? <Image className={s.heart} src={heartActive} alt="heart" /> :
            <Image className={s.activeHeart} src={heart} alt="heart" />}
        </div>

        <div className={s[s['right-bg']]}></div>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div className={s['left-content']}>
              <div className={s.title}>
                <h3 className={s['title-inner']}>
                  {product.title}
                </h3>
              </div>
              <div className={s['price-wrapper']}>
                <p className={s.price}>{product.price}$</p>
              </div>
            </div>
            <div className={s['right-content']}>
              <DescriptionProduct desc={product.description} />
              <AddingToCard product={product} />
            </div>
          </div>
        </div>
      </div>}

      {error && <div>Something went wrong</div>}
    </>
  )
}

