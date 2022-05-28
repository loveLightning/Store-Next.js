import { useGetProductsQuery } from "../../store/product/product.api";
import HomeProduct from "./HomeProduct";
import s from "./index.module.sass";
import Choice from "./Choice";
import { IProduct } from "../../store/product/product.type";
import { TypeRoorState } from "../../store/store";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(20);
  const valueRange = useSelector((state: TypeRoorState) => state.setting.firstValue)
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.choice}>
          <Choice />
        </div>
        <div className={s.products}>
          <div className={s.title}>
            <h1>The new arrivals</h1>
          </div>
          {isLoading ? (
            <div className={s.spinner}></div>
          ) : error ? (
            <div className="error">error</div>
          ) : (
            <div className={s.product}>
              {data?.map((product: IProduct) => {
                if (product.price >= valueRange[0] && product.price <= valueRange[1]) {
                  return <HomeProduct key={product.id} product={product} />;
                }
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
