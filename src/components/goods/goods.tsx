import React, { useEffect } from 'react'
import s from './goods.module.sass'
import { useRouter } from 'next/router'
import { Loader, ProductFilters } from 'src/components'
import { useAppSelector, useAppDispatch, fetchGoods, goodsSelector, valueRatingSelector, dynamicRangeSelector, setValueDynamicRange, setValueRange, setValueRating } from 'src/store'
import { GoodsItem } from './ui'
import { useFilteredGoods } from 'src/hooks'

export const Goods = () => {
    const router = useRouter()
    const { data: goods, loading, error } = useAppSelector(goodsSelector)
    const valueRating = useAppSelector(valueRatingSelector)
    const valueDynamicRange = useAppSelector(dynamicRangeSelector)
    const filteredProducts = useFilteredGoods(goods)
    const dispatch = useAppDispatch()
    const query = router.query
    const category = query.category?.toString()

    useEffect(() => {
        dispatch(fetchGoods(category ?? ''))
    }, [category, dispatch])

    useEffect(() => {
        if (goods.length) {
            const minValue = Math.min(...goods.map(item => item.price))
            const maxValue = Math.max(...goods.map(item => item.price))

            dispatch(setValueDynamicRange([minValue, maxValue]))
            dispatch(setValueRange([minValue, maxValue]))
            dispatch(setValueRating(2))
        }
    }, [dispatch, goods])

    return (
        <>
            {loading && <Loader />}
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.choice}>
                        <ProductFilters />
                    </div>
                    <div className={s.products}>
                        <div className={s.title}>
                            <h2>{category ? category : 'All items'}</h2>
                        </div>

                        <div className={s['product-wrapper']}>
                            {filteredProducts && !loading && valueDynamicRange && valueRating && <div className={s.product}>
                                {filteredProducts.length ? filteredProducts?.map((product) => {
                                    if (
                                        product.price >= valueDynamicRange[0] &&
                                        product.price <= valueDynamicRange[1] &&
                                        product.rating.rate > valueRating
                                    ) return <GoodsItem key={product.id} product={product} />
                                }) : <p>Not found</p>}

                            </div>}
                            {error && <div className='error'>Something went wrong</div>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

