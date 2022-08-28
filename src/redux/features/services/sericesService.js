import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchServices } from "~/http-client/api-services";

export const getServices = createAsyncThunk(
  "services/getServices",
  async (params, thunkAPI) => {
    try {
      const { data } = await fetchServices(params);
      return thunkAPI.fulfillWithValue(data.data.items);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
