import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchHomeData } from "~/http-client/api-services";

export const getHomeData = createAsyncThunk(
  "home/getHomeData",
  async (params, thunkAPI) => {
    try {
      const { data } = await fetchHomeData(params);
      return thunkAPI.fulfillWithValue(data.data.result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
