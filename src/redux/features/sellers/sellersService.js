import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchSellers } from "~/http-client/api-services";

export const getSellers = createAsyncThunk(
  "sellers/getSellers",
  async (params, thunkAPI) => {
    try {
      const { data } = await fetchSellers(params);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
