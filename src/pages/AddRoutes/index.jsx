import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HeightBox from "../../components/HeightBox";

export default function AddRoute() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <div>
      <AccountNavigationBar />
      <HeightBox height={40} />
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
          <Typography variant="h4" textAlign="left">
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
    </div>
  );
}
