import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeNavigationBar from "../../components/HomeNavigationBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const theme = createTheme();

export default function AddSchedule() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      route: data.get("route"),
      station1: data.get("station1"),
      station1: data.get("station2"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ETikcet
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <HomeNavigationBar />
      </main>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Schedule
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="bus"
              label="BusID"
              name="bus"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="route"
              label="Route"
              id="route"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="departure"
              label="Departure"
              id="departure"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="arival"
              label="Arival"
              id="arival"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="dtime"
              label="Departure Time"
              id="dtime"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="atime"
              label="Arival Time"
              id="atime"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
            >
              Add Schedule
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              href="../../BusRoutes"
            >
              Back
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
