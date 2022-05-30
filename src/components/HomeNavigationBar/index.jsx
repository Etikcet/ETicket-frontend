import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function HomeNavigationBar() {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor:'#3493E8'}}>
      <Stack spacing={'17%'} direction="row">
        <Button variant="contained" onClick={() => navigate("/")}>Home</Button>
        <Button variant="contained" onClick={() => navigate("/busroutes")}>Routes</Button>
        <Button variant="contained" onClick={() => navigate("/signin")}>signIn</Button>
        <Button variant="contained" onClick={() => navigate("/signup")}>SignUp</Button>
        <Button variant="contained" onClick={() => navigate("/help")}>help</Button>
      </Stack>
    </div>
  );
}

