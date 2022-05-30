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
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeNavigationBar from "../../components/HomeNavigationBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const theme = createTheme();

export default function AddRoute() {
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
            Add Route
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
              name="station1"
              label="Station 1"
              id="station1"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="station2"
              label="Station 2"
              id="station2"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              id="price"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
            >
              Add Route
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
