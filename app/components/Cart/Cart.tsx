import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TypeRoorState } from "../../store/store";
import Footer from "../Footer/Index";
import s from "./styled.module.sass";
import Image from "next/image";
import minus from "../../../public/img/minus.svg";
import plus from "../../../public/img/plus.svg";
import { Root } from "./Basket.type";
import { secondIncrement } from "../../store/BasketData/BasketData";
import { secondDecrement, removeProduct } from "../../store/BasketData/BasketData";

const Cart: React.FC = () => {
  let baskets: Root = useSelector(
    (state: TypeRoorState) => state.addBasket.basket
  );

  let [sumProducts, setSumProducts] = useState<number>(0);
  const dispath = useDispatch();
  let sumresult: number = 0;
  useEffect(() => {
    for (let i = 0; i < baskets.length; i++) {
      sumresult += baskets[i].count * baskets[i].dataBasket.price
      setSumProducts(sumresult)
    }
  }, [baskets]);

  const counterDecrement = (id: number) => {
    dispath(secondDecrement(id))
  };

  const counterIncrement = (id: number) => {
    dispath(secondIncrement(id))
  };

  const removeItem = (id: number) => {
    dispath(removeProduct(id))
    setSumProducts(sumresult)
  }
  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s["left-content"]}>
            <h3 className={s.title}>Your shopping cart</h3>
            {baskets.length
              ? baskets.map((product, id) => (
                  <div key={id} className={s.product}>
                    <div className={s["product-inner"]}>
                      <div  onClick={() => removeItem(id)} className={s.close}>&times;</div>
                      <div className={s.content}>
                        <Image
                          height="80px"
                          width="96px"
                          src={product.dataBasket.image}
                          className={s.image}
                          priority
                        ></Image>
                        <div className={s.title}>
                          <p className={s["title-inner"]}>
                            {String(product.dataBasket.title)
                              .split(" ")
                              .splice(0, 3)}
                            ...
                          </p>
                          <p className={s["price-down"]}>
                            {product.dataBasket.price}$
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
                        ></Image>
                        <div className={s.count}>{product.count}</div>
                        <Image
                          onClick={() => counterIncrement(id)}
                          className={s.plus}
                          src={plus}
                          width="18px"
                          height="18px"
                          priority
                        ></Image>
                      </div>
                      <div>
                        <p>{(product.dataBasket.price * product.count).toFixed(2)}$</p>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div className={s["right-content"]}>
            <p className={s.order}>Order summary</p>
            <div className={s.total}>
              <p className={s["sub-total"]}>Sub total</p>
              <p className={s["price"]}>${sumProducts.toFixed(2)}</p>
            </div>
            <div className={s.fee}>
              <p className={s["sub-total"]}>Delivery fee</p>
              <p className={s["price"]}>0$</p>
            </div>
            <div className={s.line}></div>
            <div className={s.result}>${sumProducts.toFixed(2)}</div>
            <div className={s.btn}>
              <button className={s["btn-pay"]}>Proceed to checkout</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
