import { useEffect } from "react";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import reducers from "../store/Reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thank from "redux-thunk";
const store = createStore(reducers, applyMiddleware(thank));

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
