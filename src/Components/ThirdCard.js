import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PolylineIcon from '@mui/icons-material/Polyline';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

const ThirdCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  const headings = [
    { title: "Brand Identity", icon: <BrandingWatermarkIcon sx={{ fontSize: 40, color: "#39b54a" }} /> },
    { title: "Illustration", icon: <MarkEmailUnreadIcon sx={{ fontSize: 40, color: "#39b54a" }} /> },
    { title: "Marketing", icon: <FormatColorFillIcon  sx={{ fontSize: 40, color: "#39b54a" }} /> },
    { title: "Web Design", icon: <ArchitectureIcon  sx={{ fontSize: 40, color: "#39b54a" }} /> },
    { title: "Packaging Design", icon: <PolylineIcon    sx={{ fontSize: 40, color: "#39b54a" }} /> },
    { title: "Web Development", icon: <ViewCarouselIcon  sx={{ fontSize: 40, color: "#39b54a" }} /> },
  ];

  return (
    <Card
    style={{
      height: isSmallScreen ? "auto" : "auto",
      backgroundColor: "white",
      width: "100vw",
    }}
  >
    <CardContent
      style={{
        width: isSmallScreen ? "100%" : "60%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Typography sx={{ mt: 3 }} variant="h6" color="#39b54a">
        What we do
      </Typography>
      {/* <Typography sx={{ mt: 3 }} variant="h3" color="black">
        We’ve got everything you need to launch and grow your business
      </Typography> */}
      <Box sx={{ width: "100%", borderBottom: " 1px solid #757575", mt: 2 }} />
    </CardContent>

    {/* Two columns on larger screens, one column on smaller screens */}
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: isSmallScreen ? "100%" : "60%",
        margin: "auto",
      }}
    >
      {headings.map((item, index) => (
        <ListItem
          key={index}
          style={{
            width: isSmallScreen ? "100%" : "calc(50% - 70px)",
            margin: "8px",
            textAlign: "left",
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
            }}
          >
            {item.icon}
          </Box>
          <ListItemText
            primary={<Typography variant="h5" sx={{ fontWeight: "bold" }}>{item.title}</Typography>}
            secondary="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
          />
        </ListItem>
      ))}
    </Box>
  </Card>
  );
};

export default ThirdCard;
