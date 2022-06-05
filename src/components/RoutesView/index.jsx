import React from "react";
import BusRoute from "../BusRoute";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export default function RouteView({ routes, title }) {
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
        {title}
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
