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
              component="h2"
              style={{ fontFamily: "Lato" }}
            >
              {route.start} - {route.finish}
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Lato" }}>
              Bus id: {route.id}
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Lato" }}>
              {route.arrival}
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Lato" }}>
              {route.departure}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
