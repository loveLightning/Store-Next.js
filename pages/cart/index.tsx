import React from "react";
import { Provider } from "react-redux";
import Cart from "../../app/components/Cart/Cart";
import Header from "../../app/components/Header/Header";
import { store } from "../../app/store/store";

const Index: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Header>
          
        </Header>
        <Cart />
      </Provider>
    </>
  );
};

export default Index;
