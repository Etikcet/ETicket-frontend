/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from "../client";

export default {
  addRoute(routeData) {
    return resolver(axiosClient.post("/route/add", routeData));
  },
  getRoute(routeId) {
    return resolver(axiosClient.get("route/get/" + routeId));
  },
  getAllRoutes() {
    return resolver(axiosClient.get("/route/getall"));
  },
  getAllStations() {
    return resolver(axiosClient.get("/route/stations"));
  },
  checkRouteAvailability(data) {
    return resolver(axiosClient.post("/route/checkroute", data));
  },
  getPopularRoutes() {
    return resolver(axiosClient.get("/route/popular"));
  },
};
