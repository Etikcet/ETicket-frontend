import React from "react";
import BusRoute from "../BusRoute";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

const routes = [
  {
    id: 1,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
  {
    id: 2,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
  {
    id: 3,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
  {
    id: 4,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
  {
    id: 5,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
  {
    id: 6,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
  {
    id: 7,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
  {
    id: 8,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
  {
    id: 9,
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1200.00",
    arrival: "10.00 am",
    departure: "10.30am",
  },
];

export default function PopularRoutes() {
  return (
    <div
      style={{
        maxWidth: 1280,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 36,
          fontFamily: "Lato",
          color: "rgba(0, 0, 0, 0.5)",
        }}
      >
        Popular Routes
      </p>
      <Grid container spacing={2}>
        {routes.map((item) => (
          <Grid item>
            <BusRoute route={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
