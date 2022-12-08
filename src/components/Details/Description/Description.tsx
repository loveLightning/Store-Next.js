import React from "react";
import s from "./styled.module.sass";
import arrowUp from "../../../../public/img/arrow-up.svg";
import Image, { ImageProps } from "next/image";
import { IProduct } from "../../../store/product/product.type";
import { useState, useRef } from "react";

const Description: React.FC<{ products: IProduct[]; routerPath: any }> = ({
  products,
  routerPath,
}) => {
  const splice = `${products[routerPath - 1].description
    .split(" ")
    .splice(0, 10)}...`;
  const spliceText = splice.replaceAll(",", " ");
  const [desc, setDesc] = useState(false);
  const [active, setActive] = useState(false);

  const toggleDesc = () => {
    setDesc(!desc);
    setActive(!active);
  };

  return (
    <div>
      <div className={s.desc}>
        <p className={s["desc-title"]}>Description</p>
        <div className={active ? `${s.arrow} ${s.active}` : `${s.arrow}`}>
          <Image
            onClick={toggleDesc}
            className={s.arrowUp}
            src={arrowUp}
            height="16px"
            width="16px"
            priority
            alt=""
          ></Image>
        </div>
      </div>
      <div className={s["desc-inner"]}>
        {!desc ? spliceText : products[routerPath - 1].description}
      </div>
      <div className={s.line}></div>
    </div>
  );
};

export default Description;
