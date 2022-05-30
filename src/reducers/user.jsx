import { createSlice } from "@reduxjs/toolkit";

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
    loggingRequest: (state) => {
      state.loading = true;
    },
    loggingRequestSuccess: (state, action) => {
      state = {
        ...action.payload,
        auth: true,
        loading: false,
      };
    },
    loggingRequestFaled: (state, action) => {
      state.loading = false;
      state.auth = false;
      state.errorOccured = true;
      state.errorMessage = action.errorMessage;
    },
  },
});

export const { loggingRequest, loggingRequestSuccess, loggingRequestFaled } =
  userSlice.actions;

export default userSlice.reducer;
