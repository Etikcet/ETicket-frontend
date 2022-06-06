/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from "../client";

export default {
  getUserBookings() {
    return resolver(axiosClient.get("/booking/mybookings"));
  },
};
