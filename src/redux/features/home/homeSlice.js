import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

import { getHomeData } from "./homeService";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    status: "init",
    categories: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomeData.pending, (state) =>
        produce(state, (draft) => {
          draft.status = "loading";
        })
      )
      .addCase(getHomeData.fulfilled, (state, action) =>
        produce(state, (draft) => {
          draft.categories = action.payload.find(
            (i) => i.front_id === "cuisines"
          );
          draft.status = "success";
        })
      )
      .addCase(getHomeData.rejected, (state, action) =>
        produce(state, (draft) => {
          draft.status = "failure";
        })
      );
  },
});

export default homeSlice.reducer;
