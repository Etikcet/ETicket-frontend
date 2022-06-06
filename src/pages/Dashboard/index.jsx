import React, { useState } from "react";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeightBox from "../../components/HeightBox";
import DASHBOARD_IMAGE from "../../assets/dashboard-image.svg";
import PendingBooking from "../../components/PendingBooking";
import api from "../../api";

export default function Dashboard() {
  const navigate = useNavigate();

  const [userBookings, setUserBookings] = useState([]);

  React.useEffect(() => {
    async function getUserBookings() {
      try {
        const [code, data] = await api.booking.getUserBookings();
        if (code === 200) {
          const temp = [];
          data.bookings.forEach((element) => {
            if (element.status === "PENDING") {
              temp.push(element);
            }
          });
          setUserBookings(temp);
        }
      } catch (error) {
        // Error occured while getting the user bookings
      }
    }
    getUserBookings();
  }, []);

  return (
    <Stack direction="column" justifyContent="center">
      <AccountNavigationBar />
      <HeightBox height={20} />
      <div style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}>
        <Stack direction="row" spacing={15}>
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
            {userBookings.length > 2 && (
              <Button onClick={() => navigate("/bookingview")}>See more</Button>
            )}
          </Stack>

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
