import { useGetProductsQuery } from "../../store/product/product.api";
import NewProducts from "./NewProducts";
import s from "./styled.module.sass";
import { IProduct } from "../../store/product/product.type";
import { TypeRoorState } from "../../store/store";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(20);
  const valueRange = useSelector(
    (state: TypeRoorState) => state.setting.firstValue
  );
  const valueRadio = useSelector(
    (state: TypeRoorState) => state.choiceRate.value
  );
  return (
    <>
      {isLoading ? (
        <div className={s["spinner-wrapper"]}>
          <div className={s.spinner}></div>
        </div>
      ) : error ? (
        <div className="error">Error</div>
      ) : (
        <>
          {data?.map((product: IProduct) => {
            if (
              product.price >= valueRange[0] &&
              product.price <= valueRange[1] &&
              product.rating.rate > valueRadio
            ) {
              return <NewProducts key={product.id} product={product} />;
            }
          })}
        </>
      )}
    </>
  );
};

export default Home;
