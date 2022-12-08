import { useRouter } from "next/router";
import React from "react";
import s from "./styled.module.sass";
import Image from "next/image";
import heart from "../../../public/img/heart.svg";
import { IProduct } from "../../store/product/product.type";
import Carousel from "./Carousel/Carousel";
import Description from "./Description/Description";
import Basket from "./Basket/Basket";

const Details: React.FC<{ products: IProduct[] }> = ({ products }) => {
  const router: any = useRouter();
  const routerPath = router.query.id;
  return (
    <>
      <div className={s["wrapper-bg"]}>
        <div className={s["left-bg"]}>
          <div className={s["bg-slider"]}>
            <Carousel routerPath={routerPath} products={products} />
          </div>
        </div>
        <div className={s['heart-wrapper']}>
          <Image className={s.heart} src={heart} alt=""></Image>
        </div>
        <div className={s[s["right-bg"]]}></div>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div className={s["left-content"]}>
              <div className={s.title}>
                <h3 className={s["title-inner"]}>
                  {products[routerPath - 1].title}
                </h3>
              </div>
              <div className={s["price-wrapper"]}>
                <p className={s.price}>{products[routerPath - 1].price}$</p>
              </div>
            </div>
            <div className={s["right-content"]}>
              <Description products={products} routerPath={routerPath} />
              <Basket products={products} routerPath={routerPath} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
