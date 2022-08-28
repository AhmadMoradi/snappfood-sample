import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "general",
  initialState: {
    lat: 35.745,
    long: 51.456,
  },
});

export default generalSlice.reducer;
