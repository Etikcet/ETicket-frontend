import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function PendingBooking(props) {
  const { booking } = props;
  return (
    <Card>
      <CardContent>
        <p>{booking.start + " - " + booking.end}</p>
        <p>{"Arrival: " + booking.startTime}</p>
        <p>{"Reach: " + booking.endTime}</p>
      </CardContent>
    </Card>
  );
}
