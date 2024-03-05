import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Box from '@mui/material/Box';


const SecondCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      style={{ height: isSmallScreen ? "auto" : "100vh", backgroundColor: "#39b54a", width: "100vw" }}
    >
      <CardContent
        style={{
          width: isSmallScreen ? "100%" : "30%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography sx={{ mt: 3 }} variant="h6" color="black">
          Hello there
        </Typography>
        <Typography sx={{ mt: 3 }} variant="h3" color="white">
          We Are Glint
        </Typography>
        <Box sx={{ width: "100%", borderBottom: "1px solid white", mt: 2 }} />
      </CardContent>
      <CardContent
        style={{
          width: isSmallScreen ? "100%" : "60%",
          margin: "auto",
          // textAlign: "left",
          // fontSize: isSmallScreen ? "1rem" : ".5rem",
          overflowWrap: "break-word", // Allow text to break into multiple lines
        }}
      >
        <Typography style={{fontSize: isSmallScreen ? "1rem" : "1.3rem",}} variant="h4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "center",
          gap: 4,
          marginTop: 4,
          flexWrap: "wrap", 
          // borderBottom: "1px solid white",
          margin:'auto'// Allow boxes to wrap to the next line
        }}
      >
        <Box
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          p={2}
          sx={{
            color: 'white',
            fontSize: isSmallScreen ? '2rem' : '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            // borderBottom:'2px solid grey',
            padding: isSmallScreen ? '0' : '2rem',
          }}
        >
          <Typography style={{fontWeight: 'bold'}} variant="h2">127</Typography>
          <Typography variant="h6" color="black">Awards Received</Typography>
        {/* <Divider/> */}
        </Box>
        <Box
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          p={2}
          sx={{
            color: 'white',
            fontSize: isSmallScreen ? '2rem' : '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            // border: isSmallScreen ? 'none' : '2px solid grey',
            padding: isSmallScreen ? '0' : '2rem',
          }}
        >
          <Typography style={{fontWeight: 'bold'}} variant="h2">127</Typography>
          <Typography variant="h6" color="black">Cups of coffee</Typography>
        </Box>
        <Box
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          p={2}
          sx={{
            color: 'white',
            fontSize: isSmallScreen ? '2rem' : '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            // border: isSmallScreen ? 'none' : '2px solid grey',
            padding: isSmallScreen ? '0' : '2rem',
          }}
        >
          <Typography style={{fontWeight: 'bold'}} variant="h2">127</Typography>
          <Typography variant="h6" color="black">Projects completed</Typography>
        </Box>
        <Box
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          p={2}
          sx={{
            color: 'white',
            fontSize: isSmallScreen ? '2rem' : '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            // border: isSmallScreen ? 'none' : '2px solid grey',
            padding: isSmallScreen ? '0' : '2rem',
          }}
        >
          <Typography style={{fontWeight: 'bold'}} variant="h2">127</Typography>
          <Typography variant="h6" color="black">Happy clients</Typography>
        </Box>
       
      </Box>
      

      
    </Card>
  );
};

export default SecondCard;
