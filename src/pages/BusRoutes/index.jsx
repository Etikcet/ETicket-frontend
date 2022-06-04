import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import BusRoute from "../../components/BusRoute";
import Footer from "../../components/Footer";
import { Button } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import api from "../../api";

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
  const navigate = useNavigate();
  const userIsAdmin = useSelector((state) => state.user?.isAdmin);
  const [allRoutes, setAllRoutes] = React.useState([]);

  React.useEffect(() => {
    async function getAllRoutes() {
      try {
        const [code, data] = await api.route.getAllRoutes();
        if (code === 200 && data.statusCode === 201) {
          setAllRoutes(data.data.routes);
        }
      } catch (error) {}
    }
    getAllRoutes();
  }, []);
  return (
    <div>
      <AccountNavigationBar />

      <Container sx={{ py: 8 }} maxWidth="md" style={{ maxWidth: "1280px" }}>
        {userIsAdmin && (
          <Button onClick={() => navigate("/addroutes")} variant="contained">
            Add Route
          </Button>
        )}
        {userIsAdmin && <HeightBox height={40} />}
        <Grid container spacing={4}>
          {allRoutes.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <BusRoute route={card} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box>
        <Footer />
      </Box>
    </div>
  );
}
