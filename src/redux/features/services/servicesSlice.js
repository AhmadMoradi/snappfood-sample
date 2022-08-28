import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

import { getServices } from "./sericesService";

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    isLoadingServices: true,
    services: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        return produce(state, (draft) => {
          draft.isLoadingServices = true;
        });
      })
      .addCase(getServices.fulfilled, (state, action) => {
        return produce(state, (draft) => {
          draft.services = action.payload;
          draft.isLoadingServices = false;
        });
      })
      .addCase(getServices.rejected, (state, action) => {
        // TODO: handle rejection
      });
  },
});

export default servicesSlice.reducer;
