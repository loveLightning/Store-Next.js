import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper'
import Image from 'next/image'
import { ProductTypes } from 'src/types'

interface Props {
  product: ProductTypes
}
interface ImagesTypes {
  img: string
}

export const Carousel = ({ product }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()

  const carousel: ImagesTypes[] = new Array(4).fill({ img: product?.image })

  return (
    <>
      {carousel[0].img && <><Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {carousel?.map((img, id) => (
          <SwiperSlide key={id}>
            <Image
              className="swiper-img"
              width={200}
              height={400}
              src={img.img}
              objectFit="contain"
              priority
              alt="product"
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {carousel?.map((img, id) => (
            <SwiperSlide key={id}>
              <Image
                className="swiper-img"
                width="96px"
                height="80px"
                objectFit="contain"
                src={img.img}
                priority
                alt="product"
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper></>}
    </>
  )
}
