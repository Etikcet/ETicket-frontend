import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  ID: null,
  username: null,
  phoneNumber: null,
  userType: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggingRequest: async (state, action) => {},
    signUpRequest: (state, action) => {
      state.auth = true;
      state.ID = action.payload.ID;
      state.username = action.payload.username;
      state.phoneNumber = action.payload.phoneNumber;
      state.userType = action.payload.userType;
    },
  },
});

export const { loggingRequest, signUpRequest } = userSlice.actions;

export default userSlice.reducer;
