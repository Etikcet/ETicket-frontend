import React, { useState } from "react";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const CustomButton = styled("div")({
  textTransform: "none",
  color: "#FF6584",

  fontWeight: "bold",
  borderRadius: 0,
  cursor: "pointer",
  padding: 15,
  "&:hover": {
    backgroundColor: "#f1f2f4",
  },
});

const startingCitiesDummy = [
  { label: "Matara", year: 1994 },
  { label: "Colombo", year: 1994 },
  { label: "Jaffna", year: 1994 },
  { label: "Gampaha", year: 1994 },
];

export default function HomePageRouteSelect() {
  const [clickedButton, setClickedButton] = useState("BOOKINGS");
  return (
    <div style={{ marginTop: -150 }}>
      <div
        style={{
          maxWidth: 1280,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack direction="row">
          <CustomButton
            style={{
              borderTopLeftRadius: 10,
              color: clickedButton === "BOOKINGS" ? "#FF6584" : "#fff",
              backgroundColor:
                clickedButton === "BOOKINGS"
                  ? "#fff"
                  : "rgba(255, 255, 255, 0.2)",
            }}
            onClick={() => {
              setClickedButton("BOOKINGS");
            }}
          >
            Bookings
          </CustomButton>
          <CustomButton
            onClick={() => {
              setClickedButton("ROUTES");
            }}
            style={{
              borderTopRightRadius: 10,
              color: clickedButton === "ROUTES" ? "#FF6584" : "#fff",
              backgroundColor:
                clickedButton === "ROUTES"
                  ? "#fff"
                  : "rgba(255, 255, 255, 0.2)",
            }}
          >
            Routes
          </CustomButton>
        </Stack>
      </div>

      <div
        style={{
          maxWidth: 1280,
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#fff",
          boxShadow: "6px 10px 30px -8px rgba(0, 0, 0, 0.1)",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          height: 250,
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ height: 250 }}
          spacing={3}
        >
          <Stack direction="column" spacing={1}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "rgba(0, 0, 0, 0.5)",
                fontFamily: "Lato",
                margin: 0,
              }}
            >
              Leaving From
            </p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={startingCitiesDummy}
              sx={{ width: 200 }}
              renderInput={(params) => <TextField {...params} label="Start" />}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "rgba(0, 0, 0, 0.5)",
                fontFamily: "Lato",
                margin: 0,
              }}
            >
              To
            </p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={startingCitiesDummy}
              sx={{ width: 200 }}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "rgba(0, 0, 0, 0.5)",
                fontFamily: "Lato",
                margin: 0,
              }}
            >
              Date
            </p>
            <TextField type="date" placeholder="Date" sx={{ width: 200 }} />
          </Stack>
          <Stack direction="column" spacing={1}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "rgba(0, 0, 0, 0.5)",
                fontFamily: "Lato",
                margin: 0,
              }}
            >
              No: of Seats
            </p>
            <TextField type="text" defaultValue={1} sx={{ width: 200 }} />
          </Stack>
          <Stack direction="column" spacing={1}>
            <div style={{ height: 20 }} />
            <Button
              color="secondary"
              variant="contained"
              style={{ height: 55 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}
