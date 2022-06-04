/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from "../client";

export default {
  addRoute(routeData) {
    return resolver(axiosClient.post("/route/add", routeData));
  },
};
