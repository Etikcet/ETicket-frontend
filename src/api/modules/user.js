/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from "../client";

export default {
  registerUser(userData) {
    return resolver(axiosClient.post("/user/signup", userData));
  },
  signinUser(user) {
    return resolver(axiosClient.get("/user/login", user));
  },
};
