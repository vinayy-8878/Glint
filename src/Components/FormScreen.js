import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CarouselComponent from "../Components/CarouselComponent";
// import { TextFields } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import StormIcon from "@mui/icons-material/Storm";
// import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  focused: {
    borderColor: "#39b54a !important", // Set the focus border color to green
    color: "#39b54a !important", // Set the text color to green when focused
  },
});

const FormScreen = () => {
//   const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      style={{
        height: isSmallScreen ? 'auto' : "110vh",
        width: "100%",
        backgroundColor: "black",
        padding: 0,
     
      }}
    >
      <CardContent
        style={{
          width: isSmallScreen ? "100%" : "70%",
          margin: "auto",
          textAlign: "center",
          padding:0
        }}
      >
        <Typography sx={{ mt: 1 }} variant="h6" color="#39b54a">
          Contact Us
        </Typography>
        <Typography
          sx={{ mt: 3 }}
          variant={isSmallScreen ? "h4" : "h3"}
          color="white"
        >
          Reach out for a new project or just say hello
        </Typography>
        <Divider sx={{ mt: 3 }} />
        <div style={{ display: "flex",alignItems:'center',padding:0, justifyContent: "center",flexDirection: isSmallScreen ? "column" : "row" }}>
          <Card
            style={{
                width: isSmallScreen ? "90%" : "60%",
              backgroundColor: "#1a1a1a",
              color: "white",
              textAlign: "left",
              height:'80vh'
            }}
          >
            <CardContent>
              <Typography style={{ marginBottom: "70px" }}>
                Send us a message
              </Typography>
              <TextField
                style={{ width: "90%", marginBottom: "30px", color: "white" }}
                id="standard-basic"
                label="Your name"
                variant="standard"
                color="success"
                InputLabelProps={{
                  style: { color: "grey" },
                }}
                InputProps={{
                  style: { color: "#39b54a" },
                }}
              />
              <TextField
                style={{ width: "90%", marginBottom: "30px" }}
                id="standard-basic"
                label="Your email"
                variant="standard"
                color="success"
                // color= '#39b54a'
                InputLabelProps={{
                  style: { color: "grey" },
                }}
                InputProps={{
                  style: { color: "#39b54a" },
                }}
              />
              <TextField
                style={{ width: "90%", marginBottom: "30px" }}
                id="standard-basic"
                label="Subject"
                variant="standard"
                color="success"
                InputLabelProps={{
                  style: { color: "grey" },
                }}
                InputProps={{
                  style: { color: "#39b54a" },
                }}
              />
              <TextField
                style={{ width: "90%", marginBottom: "30px" }}
                id="standard-multiline-flexible"
                label="Your Message"
                multiline
                rows={6}
                variant="standard"
                color="success"
                InputLabelProps={{
                  style: { color: "grey" },
                }}
                InputProps={{
                  style: { color: "#39b54a" },
                }}
              />
            </CardContent>
            <Button
              style={{ width: "90%", margin: "auto", display: "block" }}
              variant="contained"
              color="success"
            >
              Success
            </Button>
          </Card>
          <Card
            style={{
                width: isSmallScreen ? "90%" : "40%",
              backgroundColor: "#333333",
              color: "white",
              textAlign: "left",
              marginTop:isSmallScreen ?'10px':'0',
              height:'80vh'
            }}
          >
            <CardContent>
            <Typography style={{marginBottom: '50px'}}>CONTACT INFO</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h6" style={{ color: "#39b54a" }}>
                Where to Find Us
              </Typography>
              <Typography style={{ color: "grey", marginBottom: '50px' }}>
                1600 Amphitheatre Parkway
                <br />
                Mountain View, CA
                <br />
                94043 US.
              </Typography>
              <Typography variant="h6" style={{ color: "#39b54a" }}>
                Email Us At
              </Typography>
              <Typography style={{ color: "grey", marginBottom: '50px' }}>
                contact@glintsite.com
                <br />
                info@glintsite.com
              </Typography>
              <Typography variant="h6" style={{ color: "#39b54a" }}>
                Call Us At
              </Typography>
              <Typography style={{ color: "grey", marginBottom: '30px' }}>
                Phone: (+63) 555 1212
                <br />
                Mobile: (+63) 555 0100
                <br />
                Fax: (+63) 555 0101
              </Typography>
            </CardContent>
            <Stack sx={{marginLeft: "16px",}} direction="row" spacing={0}>
      <FacebookTwoToneIcon
        sx={{
          color: "white", // Grey color
          borderRadius: "50%",
          padding: "4px", // Decreased padding
          fontSize: "1.5rem", // Decreased font size
          transition: "color 0.3s", // Smooth color transition
          "&:hover": {
            color: "#39b54a", // Change color to white on hover
            cursor: "pointer", // Show pointer cursor on hover
          },
        }}
      />
      <TwitterIcon
        sx={{
          color: "white",
          borderRadius: "50%",
          padding: "4px",
          fontSize: "1.5rem",
          transition: "color 0.3s",
          "&:hover": {
            color: "#39b54a",
            cursor: "pointer",
          },
        }}
      />
      <InstagramIcon
        sx={{
          color: "white",
          borderRadius: "50%",
          padding: "4px",
          fontSize: "1.5rem",
          transition: "color 0.3s",
          "&:hover": {
            color: "#39b54a",
            cursor: "pointer",
          },
        }}
      />
      <FilterCenterFocusIcon
        sx={{
          color: "white",
          borderRadius: "50%",
          padding: "4px",
          fontSize: "1.5rem",
          transition: "color 0.3s",
          "&:hover": {
            color: "#39b54a",
            cursor: "pointer",
          },
        }}
      />
      <StormIcon
        sx={{
          color: "white",
          borderRadius: "50%",
          padding: "4px",
          fontSize: "1.5rem",
          transition: "color 0.3s",
          "&:hover": {
            color: "#39b54a",
            cursor: "pointer",
          },
        }}
      />
    </Stack>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormScreen;
