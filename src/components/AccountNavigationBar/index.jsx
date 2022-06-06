import React from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ETICKET_USER_DETAILS, TOKEN_KEY } from "../../constants";
import { logOutRequest } from "../../reducers/user";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#9c27b0",
  backgroundColor: "transparent",
  fontWeight: "bold",
  fontSize: 15,
  fontFamily: "Lato",
  "&:hover": {
    color: "#000",
  },
});

export default function AccountNavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function logOutUser() {
    localStorage.removeItem(ETICKET_USER_DETAILS);
    localStorage.removeItem(TOKEN_KEY);
    dispatch(logOutRequest());
    navigate("/");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: 1280,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div>
        <Logo />
      </div>
      <div style={{ width: 750 }}></div>
      <div style={{ paddingTop: 30 }}>
        <Stack spacing={5} direction="row">
          <CustomButton
            variant="text"
            disableElevation
            onClick={() => navigate("/dashboard")}
          >
            Home
          </CustomButton>
          <CustomButton disableElevation onClick={() => navigate("/busroutes")}>
            Routes
          </CustomButton>

          <CustomButton
            disableElevation
            onClick={() => navigate("/bookingview")}
          >
            Bookings
          </CustomButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                logOutUser();
              }}
            >
              Logout
            </MenuItem>
          </Menu>

          <CustomButton
            variant="contained"
            disableElevation
            onClick={handleClick}
          >
            Account
          </CustomButton>

          <CustomButton disableElevation onClick={() => navigate("/help")}>
            Help
          </CustomButton>
        </Stack>
      </div>
    </div>
  );
}
