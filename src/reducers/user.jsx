import { createSlice } from "@reduxjs/toolkit";
import { ETICKET_USER_DETAILS } from "../constants";

const userString = localStorage.getItem(ETICKET_USER_DETAILS) || "";
const userObj = userString ? JSON.parse(userString) : null;

const initialState = {
  auth: userObj ? true : false,
  ID: userObj?.id,
  username: userObj?.username,
  phoneNumber: userObj?.phoneNumber,
  userType: userObj?.user_type,
  isAdmin: userObj?.user_type === "ADMIN",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggingRequest: (state, action) => {
      state.auth = true;
      state.ID = action.payload.user.id;
      state.username = action.payload.user.username;
      state.phoneNumber = action.payload.user.phone_number;
      state.userType = action.payload.user.user_type;
      state.isAdmin = action.payload.user.user_type === "ADMIN";
    },
    signUpRequest: (state, action) => {
      state.auth = true;
      state.ID = action.payload.ID;
      state.username = action.payload.username;
      state.phoneNumber = action.payload.phoneNumber;
      state.userType = action.payload.userType;
      state.isAdmin = action.payload.userType === "ADMIN";
    },
    logOurRequest: (state) => {
      state.auth = false;
      state.ID = null;
      state.username = null;
      state.phoneNumber = null;
      state.userType = null;
      state.isAdmin = false;
    },
  },
});

export const { loggingRequest, signUpRequest, logOurRequest } =
  userSlice.actions;

export default userSlice.reducer;
