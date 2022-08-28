import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "~/assets/style/main.scss";
import store from "~/redux/store";

import Home from "~/pages/Home";
import Sellers from "~/pages/Sellers";
import Vendor from "~/pages/Vendor";
import NotFound from "~/pages/404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sellers" element={<Sellers />} />
          <Route path="/vendor/:id" element={<Vendor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
