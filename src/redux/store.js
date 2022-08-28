import { configureStore } from "@reduxjs/toolkit";

import generalSlice from "./features/general/generalSlice";
import servicesSlice from "./features/services/servicesSlice";
import homeSlice from "./features/home/homeSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    services: servicesSlice,
    home: homeSlice,
  },
});

export default store;
