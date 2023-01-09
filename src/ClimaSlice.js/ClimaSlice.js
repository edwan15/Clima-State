import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ClimaThunk = createAsyncThunk("clima/fetch", async (payload) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=25d21a264f7dcdfb5be61655b423da67`
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const initialState = { data: {}, status: "idle" };

const ClimaSlice = createSlice({
  name: "clima",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ClimaThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(ClimaThunk.fulfilled, (state, action) => {
      state.clima = action?.payload;
      state.loading = false;
      state.error = undefined;
    });

    builder.addCase(ClimaThunk.rejected, (state, action) => {
      state.clima = undefined;
      state.loading = false;
      state.error = action?.payload;
    });
  },
});

export default ClimaSlice.reducer;
