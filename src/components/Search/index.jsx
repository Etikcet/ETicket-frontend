import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import searchIcon from "../Search/searchIcon.png";

export default function Search() {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [date, setDate] = React.useState("");
  const [seats, setSeats] = React.useState("");

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSeatsChange = (event) => {
    setSeats(event.target.value);
  };

  return (
    <div
      style={{
        align:'center',
        backgroundColor: "#F0F2F3",
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center'

      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Leaving From
        </InputLabel>
        <Select
          labelId="from-select-helper-label"
          id="from-select-helper"
          value={from}
          label="From"
          onChange={handleFromChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Colombo"}>Colombo</MenuItem>
          <MenuItem value={"Kandy"}>Kandy</MenuItem>
          <MenuItem value={"Kurunegala"}>Kurunegala</MenuItem>
        </Select>
        <FormHelperText>Select your starter location</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">To</InputLabel>
        <Select
          labelId="to-select-helper-label"
          id="to-select-helper"
          value={to}
          label="to"
          onChange={handleToChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Colombo"}>Colombo</MenuItem>
          <MenuItem value={"Kandy"}>Kandy</MenuItem>
          <MenuItem value={"Kurunegala"}>Kurunegala</MenuItem>
        </Select>
        <FormHelperText>Select your destination</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Date</InputLabel>
        <Select
          labelId="date-select-helper-label"
          id="date-select-helper"
          value={date}
          label="Date"
          onChange={handleDateChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"2022/05/30"}>30,May,2022</MenuItem>
          <MenuItem value={"2022/05/31"}>31,May,2022</MenuItem>
          <MenuItem value={"2022/06/01"}>01,June,2022</MenuItem>
        </Select>
        <FormHelperText>Select your starter location</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Number of seats
        </InputLabel>
        <Select
          labelId="seats-select-helper-label"
          id="seats-select-helper"
          value={seats}
          label="Seats"
          onChange={handleSeatsChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <FormHelperText>Select number of seats you booking</FormHelperText>
      </FormControl>

      <Button variant="contained">
        <img
          src={searchIcon}
          alt="search icon"
          style={{ width: 50, height: 45, border: 5 }}
        />
      </Button>
    </div>
  );
}
