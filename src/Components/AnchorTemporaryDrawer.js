import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import StormIcon from "@mui/icons-material/Storm";
export default function AnchorTemporaryDrawer({ anchor, open, onClose }) {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    onClose(anchor, open);
  };

  const list = (
    <List
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        // Set the background color to black
        color: "white", // Set the text color to white
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {["Home", "About", "Services", "Works", "Client", "Contacts"].map(
        (text, index) => (
          <ListItem sx={{ marginBottom: "10px" }} key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(anchor, false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "black",
        },
      }}
    >
      <Typography
        sx={{
          color: "#39b54a",
          marginLeft: "16px", // Add margin to the right
          fontSize: "0.9rem", // Increase the font size
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        NAVIGATION
      </Typography>
      {list}
      <Typography
        sx={{
          marginTop: "30px",
          marginBottom: "30px",
          width: "100%", // Limit the width to 100%
          maxWidth: "250px", // Set a maximum width if needed
          overflowWrap: "break-word",
          color: "grey",
          marginLeft: "16px",
          fontSize: "0.75rem",
        }}
      >
        Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
        porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
        neque reprehenderit.
      </Typography>
      <Stack sx={{marginLeft: "16px",}} direction="row" spacing={0}>
      <FacebookTwoToneIcon
        sx={{
          color: "#888", // Grey color
          borderRadius: "50%",
          padding: "4px", // Decreased padding
          fontSize: "1.5rem", // Decreased font size
          transition: "color 0.3s", // Smooth color transition
          "&:hover": {
            color: "white", // Change color to white on hover
            cursor: "pointer", // Show pointer cursor on hover
          },
        }}
      />
      <TwitterIcon
        sx={{
          color: "#888",
          borderRadius: "50%",
          padding: "4px",
          fontSize: "1.5rem",
          transition: "color 0.3s",
          "&:hover": {
            color: "white",
            cursor: "pointer",
          },
        }}
      />
      <InstagramIcon
        sx={{
          color: "#888",
          borderRadius: "50%",
          padding: "4px",
          fontSize: "1.5rem",
          transition: "color 0.3s",
          "&:hover": {
            color: "white",
            cursor: "pointer",
          },
        }}
      />
      <FilterCenterFocusIcon
        sx={{
          color: "#888",
          borderRadius: "50%",
          padding: "4px",
          fontSize: "1.5rem",
          transition: "color 0.3s",
          "&:hover": {
            color: "white",
            cursor: "pointer",
          },
        }}
      />
      <StormIcon
        sx={{
          color: "#888",
          borderRadius: "50%",
          padding: "4px",
          fontSize: "1.5rem",
          transition: "color 0.3s",
          "&:hover": {
            color: "white",
            cursor: "pointer",
          },
        }}
      />
    </Stack>
    </Drawer>
  );
}
