import HomeProduct from "../HomeProduct";
import s from "./index.module.sass";
import Choice from "../Choice";
import Header from "../../Header";
import { useGetProductsQuery } from "../../../store/product/product.api";

const Jewelery: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(20);
  return (
    <Header>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.choice}>
            <Choice />
          </div>
          <div className={s.products}>
            <div className={s.title}>
              <h1>Jewelery</h1>
            </div>
            {isLoading ? (
              <div className={s.spinner}></div>
            ) : error ? (
              <div className="error">error</div>
            ) : (
              <div className={s.product}>
                {data
                  ?.filter((name) => name.category == "jewelery")
                  .map((item) => (
                    <HomeProduct key={item.id} product={item} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Jewelery;
