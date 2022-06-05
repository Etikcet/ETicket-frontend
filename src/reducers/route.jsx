import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ID: "",
  busId: "",
  start: "",
  finish: "",
  arrivalTime: "",
  departureTime: "",
  price: 0,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    routeClicked: (state, action) => {
      state.ID = action.payload.id;
      state.busId = action.payload.bus_number;
      state.start = action.payload.start;
      state.finish = action.payload.finish;
      state.arrivalTime = action.payload.arrival_time;
      state.departureTime = action.payload.departure_time;
      state.price = action.payload.price;
    },
  },
});

export const { routeClicked } = routeSlice.actions;

export default routeSlice.reducer;
