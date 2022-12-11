import Image from 'next/image'
import s from './goods-item.module.sass'
import { useRouter } from 'next/router'
import { GoodsTypes } from 'src/types'

interface Props {
    product: GoodsTypes
}

export const GoodsItem = ({ product }: Props) => {
    const titleProductFirst = product.title.split('')
    const router = useRouter()

    return (
        <>
            {product && <div onClick={() => router.push(`/details/${product.id}`)} className={s.product}>
                <Image
                    objectFit="contain"
                    className={s.image}
                    src={product.image}
                    height='330px'
                    width='310px'
                    alt={product.title}
                ></Image>
                <div className={s.desc}>
                    <span className={s.title}>{product.title.length > 50 ? titleProductFirst.join('') : product.title}</span>
                    <span className={s.price}>{`${product.price}$`}</span>
                </div>
            </div>}

        </>
    )
}

