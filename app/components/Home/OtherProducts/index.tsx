import NewProducts from "../NewProducts";
import s from "./index.module.sass";
import Choice from "../Choice";
import Header from "../../Header";
import { useGetProductsQuery } from "../../../store/product/product.api";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { TypeRoorState } from "../../../store/store";


const Women: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(20);
  const router = useRouter();
  const valueRadio = useSelector((state: TypeRoorState) => state.choiceRate.value)
  
  const path: any = router.query.id;
  console.log(path)
  const valueRange = useSelector(
    (state: TypeRoorState) => state.setting.firstValue
  );
  return (
    <Header>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.choice}>
            <Choice />
          </div>
          <div className={s.products}>
            <div className={s.title}>
              <h1>{path}</h1>
            </div>
            {isLoading ? (
              <div className={s.spinner}></div>
            ) : error ? (
              <div className="error">error</div>
            ) : (
              <div className={s.product}>
                {data
                  ?.filter((name) => name.category.includes(path))
                  .map((product) => {
                    if (
                      product.price >= valueRange[0] &&
                      product.price <= valueRange[1] && 
                      product.rating.rate > valueRadio
                    ) {
                      return <NewProducts key={product.id} product={product} />;
                    }
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Women;
