import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function Layout() {
  return (
    <Provider store={store}>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </Provider>
  );
}

export default Layout;
