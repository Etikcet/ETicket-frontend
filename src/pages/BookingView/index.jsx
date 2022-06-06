import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { useNavigate } from "react-router-dom";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import HeightBox from "../../components/HeightBox";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import api from "../../api";
import BookingRow from "../../components/BookingRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function CustomizedTables() {
  const [userBookings, setUserBookings] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getUserBookings() {
      try {
        const [code, res] = await api.booking.getUserBookings();
        if (code === 200) {
          setUserBookings(res?.bookings);
        }
      } catch (error) {
        // Error in getting the bookings
      }
    }
    getUserBookings();
  }, []);
  return (
    <main>
      <AccountNavigationBar />
      <HeightBox height={40} />
      <Stack justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          style={{ width: 300 }}
          onClick={() => navigate("/")}
        >
          Add New Booking
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Box padding="20px">
          <p style={{ fontFamily: "Lato", marginLeft: 20, fontSize: 25 }}>
            Previous Bookings
          </p>
          <Table sx={{ minWidth: 700 }} style={{ borderStyle: "solid" }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Bus ID</StyledTableCell>
                <StyledTableCell align="right">Start</StyledTableCell>
                <StyledTableCell align="right">Finish</StyledTableCell>
                <StyledTableCell align="right">Seats</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userBookings.map((row) => (
                <BookingRow booking={row} />
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </main>
  );
}
