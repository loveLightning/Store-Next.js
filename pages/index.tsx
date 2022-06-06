import { ReactElement } from "react";
import MainLayout from "../app/components/MainLayout";
import { Provider } from "react-redux";
import { store } from "../app/store/store";

export default function HomePage() {
  return {};
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Provider store={store}>
        <MainLayout>{page}</MainLayout>
    </Provider>
  );
};

