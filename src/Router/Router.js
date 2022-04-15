import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ListPage from "../Pages/ListPage";
import CartsPage from "../Pages/CartPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import * as ROUTES from "../Constant/Routes";

export default class PageRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path={ROUTES.CART_PAGE} element={<ListPage />} />
        <Route path={ROUTES.CARTS_PAGE} element={<CartsPage />} />
        <Route path={ROUTES.PRODUCT_DESC} element={<ProductDetailsPage />} />
      </Routes>
    );
  }
}
