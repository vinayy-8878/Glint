import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import StormIcon from '@mui/icons-material/Storm';
import useMediaQuery from '@mui/material/useMediaQuery'; 
// import {Button} from '@mui/material'
export default function BasicCard() {
  const theme = useTheme();
//   const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
 const isMediumDevice=useMediaQuery(theme.breakpoints.down('md'));
  const isLargeDevice=useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <>
      <Card
         sx={{
          // height: isMediumDevice ? "auto" : "100vh",
          backgroundColor: 'transparent',
          position: 'absolute',
          top: isScreenSmall ? '10%' : isMediumDevice ? '60%' : '50%',
          left: '10%', 
          width: '40%', 
         
          transform: isScreenSmall ? 'none' : 'translateY(-50%)',
          zIndex: 1,
          textAlign: 'left',
          marginTop: isLargeDevice ? '10%' : 0, 
          [theme.breakpoints.down('sm')]: {
            width: '60%',
            left: '50%',
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          },
        }}
      >
            <CardContent>
        <Typography
          sx={{
            color: 'grey',
            fontSize: isScreenSmall ? '1rem' : '1.5rem', // Adjust font size based on screen size
            marginBottom: '20px', // Add margin between headings
          }}
          variant="h6"
        >
          WELCOME TO GLINT
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontSize: isScreenSmall ? '2rem' : '3rem', // Adjust font size based on screen size
            textAlign: isScreenSmall ? 'center' : 'left', // Center text vertically for small screens
          }}
          variant="h1"
        >
          We are a creative group of people who design influential brands and digital experiences.
        </Typography>
      </CardContent>
      <Stack direction={isMediumDevice ? 'column' : 'row'} spacing={2}>
      <Button
        variant="outlined"
        sx={{
          color: 'white',
          borderColor: 'white',
          width: '100%',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        Start a project
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: 'white',
          borderColor: 'white',
          width: '100%',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        More about us
      </Button>
    </Stack>
      
      </Card>
      <Card
  sx={{
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '60%',
    right: '5%', 
    width: '20%', 
    transform: 'translateY(-50%)',
    zIndex: 1,
    textAlign: 'right',
    display: isScreenSmall ? 'none' : 'flex', 
    flexDirection: 'column',
    alignItems: 'flex-end', 
   
  }}
>
  <CardContent>
    <ul style={{ listStyleType: 'none', padding: 0, margin:0 }}>
      <li style={{ marginBottom:'10px' }}>
        <FacebookTwoToneIcon
          style={{
            color: 'white', // 
            border: '2px solid white', 
            borderRadius: '50%',
            padding: '8px',
            backgroundColor: 'transparent', 
          }}
        />
      </li>
      <li style={{ marginBottom:'10px' }}>
        <TwitterIcon
          style={{
            color: 'white', // 
            border: '2px solid white', 
            borderRadius: '50%',
            padding: '8px',
            backgroundColor: 'transparent', 
          }}
        />
      </li>
      <li  style={{ marginBottom:'10px' }}>
        <InstagramIcon
          style={{
            color: 'white', // 
            border: '2px solid white', 
            borderRadius: '50%',
            padding: '8px',
            backgroundColor: 'transparent', 
          }}
        />
      </li>
      <li style={{ marginBottom:'10px' }}>
        <FilterCenterFocusIcon
          style={{
            color: 'white', // 
            border: '2px solid white', 
            borderRadius: '50%',
            padding: '8px',
            backgroundColor: 'transparent', 
          }}
        />
      </li>
      <li style={{ marginBottom:'10px' }}>
        <StormIcon
          style={{
            color: 'white', // 
            border: '2px solid white', 
            borderRadius: '50%',
            padding: '8px',
            backgroundColor: 'transparent', 
          }}
        />
      </li>
    </ul>
  </CardContent>
</Card>

    </>
  );
}
