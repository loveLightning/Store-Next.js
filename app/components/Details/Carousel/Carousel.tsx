import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { IProduct } from "../../../store/product/product.type";
import Image from "next/image";

const Carousel: React.FC<{ products: IProduct[]; routerPath: any }> = ({
  products,
  routerPath,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const imgUrl: string = products[routerPath - 1].image;

  interface ICarousel {
    img: string;
  }

  const carousel: ICarousel[] = new Array(4).fill({ img: imgUrl });

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {carousel.map((img, id) => (
          <SwiperSlide key={id}>
            <Image
              className="swiper-img"
              width="200px"
              height="400px"
              src={img.img}
              objectFit="contain"
              priority
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
        {carousel.map((img, id) => (
          <SwiperSlide key={id}>
            <Image
              className="swiper-img"
              width="96px"
              height="80px"
              objectFit="contain"
              src={img.img}
              priority
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
