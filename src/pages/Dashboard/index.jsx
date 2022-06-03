import React from "react";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import DASHBOARD_IMAGE from "../../assets/dashboard-image.svg";
import Footer from "../../components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PendingBooking from "../../components/PendingBooking";

const userBookings = [
  {
    id: 1,
    start: "Colombo",
    end: "Matara",
    startTime: "12.30am",
    endTime: "2.00pm",
  },
  {
    id: 2,
    start: "Colombo",
    end: "Matara",
    startTime: "12.30am",
    endTime: "2.00pm",
  },
  {
    id: 3,
    start: "Colombo",
    end: "Matara",
    startTime: "12.30am",
    endTime: "2.00pm",
  },
];

export default function Dashboard() {
  return (
    <Stack direction="column" justifyContent="center">
      <AccountNavigationBar />
      <HeightBox height={20} />
      <div style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}>
        <Stack direction="row" spacing={15}>
          <Card sx={{ minWidth: 450, marginBottom: 10 }} variant="outlined">
            <CardContent>
              <Stack direction="column" spacing={2}>
                <p style={{ color: "#9c27b0", fontWeight: 500, fontSize: 25 }}>
                  Pending Bookings
                </p>
                {userBookings.length === 0 && (
                  <div>
                    <p>You do not have any pending bookings</p>
                  </div>
                )}
                {userBookings.slice(0, 2).map((item) => (
                  <PendingBooking booking={item} />
                ))}
                {userBookings.length > 2 && <Button>See more</Button>}
              </Stack>
            </CardContent>
          </Card>
          <div>
            <img
              src={DASHBOARD_IMAGE}
              alt=""
              style={{ width: "35vw", paddingLeft: "80px", paddingTop: "40px" }}
            />
          </div>
        </Stack>
      </div>
    </Stack>
  );
}
