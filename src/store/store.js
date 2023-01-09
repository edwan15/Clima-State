import { configureStore } from "@reduxjs/toolkit";

import ClimaReducer from "../ClimaSlice.js/ClimaSlice";

 const store = configureStore({
   reducer: {
     ClimaReducer: ClimaReducer,
   },
 });

export default store;