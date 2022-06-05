import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import BUSIMAGE from "./bus.jpg";

export default function BusRoute(props) {
  const { route } = props;
  console.log(route);
  return (
    <Card
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      style={{ width: "300px", borderStyle: "solid", borderColor: "#9C27B0" }}
    >
      <Link href="/checkout" style={{ textDecoration: "none", color: "#000" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ height: "50%", paddingTop: "20%" }}
            image={BUSIMAGE}
            alt={"bus"}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              style={{ fontFamily: "Lato", fontWeight: "bold" }}
            >
              {route.start} - {route.finish}
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Lato" }}>
              Bus id: {route.bus_number}
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Lato" }}>
              Arrival at: {route.arrival_time}
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Lato" }}>
              Departure at: {route.departure_time}
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Lato" }}>
              Rs: {route.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
