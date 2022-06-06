import React, { useEffect } from "react";
import Image from "next/image";
import s from "./styled.module.sass";
import minus from "../../../../public/img/minus.svg";
import plus from "../../../../public/img/plus.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../../store/BasketCount/BasketCount";
import { decrement } from "../../../store/BasketCount/BasketCount";
import { useRouter } from "next/router";
import { IProduct } from "../../../store/product/product.type";
import { addDataBasket } from "../../../store/BasketData/BasketData";

const Basket: React.FC<{ routerPath: any; products: IProduct[] }> = ({
  routerPath,
  products,
}) => {
  let bask = products[routerPath - 1];
  const router = useRouter();
  const dispath = useDispatch();
  let [count, setCount] = useState<number>(1);
  let [dataBasket, setDataBasket] = useState<IProduct>(bask);

  const incrementHandler = () => {
    setCount((count += 1));
    dispath(increment(count));
  };

  const decrementHandler = () => {
    if (count > 1) {
      setCount((count -= 1));
      dispath(decrement(count));
    }
  };

  const getDataForBasket = () => {
    router.push(`/cart`);
    dispath(addDataBasket({dataBasket, count}))
  };
  console.log(dataBasket)
  console.log(count)

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
        ></Image>
        <div className={s.count}>{count}</div>
        <Image
          onClick={incrementHandler}
          className={s.plus}
          src={plus}
          width="18px"
          height="18px"
          priority
        ></Image>
      </div>
      <div className={s.right}>
        <button onClick={getDataForBasket} className={s.add}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Basket;
