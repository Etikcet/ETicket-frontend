import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",

  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomeNavigationBar() {
  return (
    <div style={{backgroundColor:'grey'}}>
      <Stack direction="row" spacing={28}>
        <a href="/">
          <Item>ET ETicket</Item>
        </a>
        <a href="/busroutes">
          <Item>Routes</Item>
        </a>
        <a href="/signup">
          <Item>Sign Up</Item>
        </a>
        <a href="/">
          <Item>Sign In</Item>
        </a>
        <a href="/">
          <Item>Help</Item>
        </a>
      </Stack>
    </div>
  );
}
