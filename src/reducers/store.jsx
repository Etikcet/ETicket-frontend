import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import routeReducer from "./route";

export const store = configureStore({
  reducer: {
    user: userReducer,
    route: routeReducer,
  },
});

export default store;
