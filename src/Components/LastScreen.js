import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import  CardMedia from '@mui/material/CardMedia'
import { useTheme } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import glint from "../../src/images/bg-head.jpg";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
const Footer = () => {
  const [labelShrink, setLabelShrink] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleFocus = () => {
    setLabelShrink(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setLabelShrink(false);
    }
  };
  return (
    <Card sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: "#1a1a1a",
      margin: 0,
      padding: 0,
      flexDirection: isMobile ? 'column' : 'row' // Change flex direction based on screen size
    }}>
      <CardContent sx={{ width: isMobile ? '90%' : '30%' }}>
        <Typography sx={{ color: "#39b54a", fontWeight: 'BOLD', marginBottom: '30px' }} variant="h3">Glint.</Typography>
        <Typography variant="body1"></Typography>
        <Typography sx={{ color: "grey" }}>
          Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
          nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
          pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
          accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
        </Typography>
      </CardContent>
      <CardContent sx={{ width: isMobile ? '90%' : '30%' }}>
        <Typography sx={{ color: "white", fontWeight: 'BOLD', marginBottom: '30px', marginTop: '10px' }} variant="h6">Get notified</Typography>

        <Typography variant="body1"></Typography>
        <Typography sx={{ color: "grey" }}>
          Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut
          non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto
          porro.
        </Typography>
        <FormControl
          variant="standard"
          color="success"
          sx={{
            marginTop: '20px',
            width: '60%',
            // border: '1px solid #333333',
            backgroundColor: 'black',
            color: '#ffffff',
            '& .MuiInputLabel-root': {
              color: '#ffffff',
            },
            '& .MuiInputBase-root': {
              color: '#ffffff',
            },
          }}
        >
          <InputLabel
            htmlFor="input-with-icon-adornment"
            // shrink={labelShrink}
            sx={{
              color: '#ffffff',
            }}
          >
            Enter email
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlineIcon sx={{ color: "white" }} />
              </InputAdornment>
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </FormControl>
        <Button variant="contained" color="success" sx={{ marginTop: "20px", width: '40%', height: '49px' }}>
          Subscribe
        </Button>
      </CardContent>
      {/* <Typography>© Copyright Glint 2022</Typography> */}
    </Card>
  );
};

export default Footer;