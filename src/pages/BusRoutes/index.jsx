import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import HomeNavigationBar from "../../components/HomeNavigationBar";
import BusRoute from "../../components/BusRoute";
import Footer from "../../components/Footer";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const routes = [
  {
    id: "1",
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1300",
    arrival: "10.30am",
    departure: "10.45am",
  },
  {
    id: "2",
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1300",
    arrival: "10.30am",
    departure: "10.45am",
  },
  {
    id: "3",
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1300",
    arrival: "10.30am",
    departure: "10.45am",
  },
  {
    id: "4",
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1300",
    arrival: "10.30am",
    departure: "10.45am",
  },
  {
    id: "5",
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1300",
    arrival: "10.30am",
    departure: "10.45am",
  },
  {
    id: "6",
    start: "Matara",
    finish: "Colombo",
    price: "Rs:1300",
    arrival: "10.30am",
    departure: "10.45am",
  },
];

export default function BusRoutes() {
  return (
    <div>
      <AccountNavigationBar />

      <main>
        <Container sx={{ py: 8 }} maxWidth="md" style={{ maxWidth: "1300px" }}>
          <Grid container spacing={4}>
            {routes.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <BusRoute route={card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box>
        <Footer />
      </Box>
    </div>
  );
}
