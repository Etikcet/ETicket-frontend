import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  auth: false,
  loading: false,
  errorOccured: false,
  errorMessage: false,
  username: null,
  firstName: null,
  lastName: null,
  dob: null,
  phoneNumber: null,
  userType: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggingRequest: async (state, action) => {
      state.loading = true;
      try {
        const res = await api.user.signinUser(action.payload);
        if (res?.status === 200) {
          // User logged in succesfully
        } else {
          // Error in logging the user
        }
        state.loading = false;
      } catch (e) {
        // Error in logging the user
        state.loading = false;
      }

      state.loading = true;
    },
    signUpRequest: async (state, action) => {
      state.loading = true;
      try {
        const res = await api.user.registerUser(action.payload);
        if (res?.status === 200) {
          // User account created succesfully
        } else {
          // Error in creating the user account
        }
        state.loading = false;
      } catch (error) {
        // Error in creating the user account
        state.loading = false;
      }
    },
  },
});

export const { loggingRequest, signUpRequest } = userSlice.actions;

export default userSlice.reducer;
