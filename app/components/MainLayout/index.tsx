import Header from "../Header/Header";
import OtherProducts from "../Home/OtherProducts";

interface IHeader {
  children: React.ReactNode[] | React.ReactNode;
}

const MainLayout: React.FC<IHeader> = () => {
  return (
    <>
      <Header>

      </Header>
      <main>
        <OtherProducts />
      </main>
    </>
  );
};

export default MainLayout;
