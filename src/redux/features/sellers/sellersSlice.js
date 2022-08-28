import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

import { getSellers } from "./sellersService.js";

const sellersSlice = createSlice({
  name: "sellers",
  initialState: {
    status: "init",
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSellers.pending, (state) =>
        produce(state, (draft) => {
          draft.status = "loading";
        })
      )
      .addCase(getSellers.fulfilled, (state, action) =>
        produce(state, (draft) => {
          draft.status = "success";
          draft.data = action.payload;
        })
      )
      .addCase(getSellers.rejected, (state, action) =>
        produce(state, (draft) => {
          draft.status = "failure";
        })
      );
  },
});

export default sellersSlice.reducer;
