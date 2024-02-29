import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/bg-head.jpg";
import AnchorTemporaryDrawer from "./AnchorTemporaryDrawer"; // Import the AnchorTemporaryDrawer component

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false); // State to track if the drawer is open

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle the state to open/close the drawer
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", mt: 1 }}>
          <img src={logo} alt="Logo" style={{ height: 30 }} />

          <div>
            <Button
              sx={{
                color: "#39b54a",
                "&:hover": {
                  cursor: "pointer",
                  color: "white",
                },
              }}
              onClick={toggleDrawer} // Toggle the drawer on button click
            >
              MENU
            </Button>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
              }}
              onClick={toggleDrawer} // Toggle the drawer on icon button click
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <AnchorTemporaryDrawer
        anchor="right" // Set the anchor to right
        open={isDrawerOpen} // Pass the state to determine if the drawer is open
        onClose={toggleDrawer} // Close the drawer when onClose is called
      /> {/* Render the AnchorTemporaryDrawer component with right anchor */}
    </Box>
  );
};

export default Header;
