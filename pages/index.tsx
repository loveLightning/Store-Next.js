import Home from "../app/components/Home";
import Header from "../app/components/Header";

const HomePage: React.FC = ({ posts }: any) => {
  return (
    <>
      <Header>
      <Home />
      </Header>
    </>
  );
};

export default HomePage;
