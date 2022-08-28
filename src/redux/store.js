import { configureStore } from "@reduxjs/toolkit";

import generalSlice from "./features/general/generalSlice";
import servicesSlice from "./features/services/servicesSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    services: servicesSlice,
  },
});

export default store;
