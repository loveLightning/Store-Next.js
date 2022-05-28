import HomeProduct from "../HomeProduct";
import s from "./index.module.sass";
import Choice from "../Choice";
import Header from "../../Header";
import { useGetProductsQuery } from "../../../store/product/product.api";
import { useRouter } from "next/router";

const Women: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(20);
  const router = useRouter()
  const { pid } = router.query
  console.log(router)
  return (
    <Header>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.choice}>
            <Choice />
          </div>
          <div className={s.products}>
            <div className={s.title}>
              <h1>Women</h1>
            </div>
            {isLoading ? (
              <div className={s.spinner}></div>
            ) : error ? (
              <div className="error">error</div>
            ) : (
              <div className={s.product}>
                {data
                  ?.filter((name) => name.category == "women's clothing")
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

export default Women;
