/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from "../client";

export default {
  addBooking(data) {
    return resolver(axiosClient.post("/booking/add", data));
  },
  getUserBookings() {
    return resolver(axiosClient.get("/booking/mybookings"));
  },
  updateBookingStatus(id) {
    return resolver(axiosClient.get("/booking/update/" + id));
  },
};
