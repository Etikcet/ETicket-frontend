import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import api from "../../api";
import { Stack } from "@mui/material";

export default function PendingBooking(props) {
  const { booking } = props;
  const [route, setRoute] = useState(null);
  const [status, setStatus] = useState("PENDING");
  console.log("Booking is: ", booking);
  React.useEffect(() => {
    const createdDate = new Date(booking?.date);
    const today = new Date();
    if (createdDate.getTime() < today.getTime()) {
      setStatus("COMPLETED");
    }

    async function getRoute() {
      try {
        const [code, res] = await api.route.getRoute(booking.route_id);
        console.log("Route data: ", res);
        if (code === 200) {
          setRoute(res?.data?.route);
        }
      } catch (error) {}
    }
    getRoute();
  }, []);
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={10}>
          <Stack direction="column" spacing={1}>
            <p style={{ margin: 0 }}>{route?.start + " - " + route?.finish}</p>
            <p>{"Bus id: " + route?.bus_number}</p>
            <p>{"Arrival: " + route?.arrival_time}</p>
            <p>{"Departure: " + route?.departure_time}</p>
            <p>{"Price: Rs: " + booking?.price}</p>
          </Stack>
          <Stack direction="column" justifyContent="center">
            <p style={{ fontWeight: "bold", fontSize: 30, color: "green" }}>
              {status}
            </p>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
