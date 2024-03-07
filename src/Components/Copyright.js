import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import './Copyright.css'

const Copyright = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Change flex direction based on screen size
        justifyContent: 'center',
        backgroundColor: "#1a1a1a",
        margin: 0,
        padding: 0
      }}
    >
      <CardContent sx={{ width: isMobile?'100%':"50%", textAlign: isMobile ? 'center' : 'right', marginTop: isMobile?0:'20px' ,padding:isMobile ?'2px':'16px',paddingTop:isMobile ?'12px':'16px',}}>
        <Typography sx={{ color: "grey" }}>
          © Copyright Glint 2022
        </Typography>
      </CardContent>
      <CardContent sx={{ width: isMobile?'100%':"50%", textAlign: isMobile ? 'center' : 'left', marginTop: isMobile?0:'20px',padding:isMobile ?0:'16PX' }}>
        <Typography sx={{ color: 'grey' }}>
          Site Template by{' '}
          <span className="colorlib-text">Colorlib</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Copyright;
