import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import api from "../../api";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function BookingRow(props) {
  const { booking } = props;
  const [route, setRoute] = useState("");

  React.useEffect(() => {
    async function getRoute() {
      try {
        const [code, res] = await api.route.getRoute(booking.route_id);
        if (code === 200) {
          setRoute(res?.data?.route);
        }
      } catch (error) {}
    }
    getRoute();
  }, [booking]);
  return (
    <StyledTableRow key={booking.id}>
      <StyledTableCell align="right">{route?.bus_number}</StyledTableCell>
      <StyledTableCell align="right">{route?.start}</StyledTableCell>
      <StyledTableCell align="right">{route?.finish}</StyledTableCell>
      <StyledTableCell align="right">{booking?.seats}</StyledTableCell>
      <StyledTableCell align="right">{booking?.status}</StyledTableCell>
    </StyledTableRow>
  );
}
