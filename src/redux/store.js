import { configureStore } from "@reduxjs/toolkit";

import generalSlice from "./features/general/generalSlice";
import servicesSlice from "./features/services/servicesSlice";
import homeSlice from "./features/home/homeSlice";
import sellersSlice from "./features/sellers/sellersSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    services: servicesSlice,
    home: homeSlice,
    sellers: sellersSlice,
  },
});

export default store;
