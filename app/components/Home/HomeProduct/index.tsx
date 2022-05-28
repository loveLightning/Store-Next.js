import Image from "next/image";
import s from "./index.module.sass";
import { IProduct } from "../../../store/product/product.type";

const HomeProduct: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <>
      <div className={s.product}>
        <Image
          className={s.image}
          src={product.image}
          height="240px"
          width="120px"
        ></Image>
        <div className={s.desc}>
          <span className={s.title}>{product.title}</span>
          <span className={s.price}>{product.price}</span>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
