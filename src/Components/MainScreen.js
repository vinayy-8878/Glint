import React from 'react';
import Bg from './Bg';
import Header from './Header';
import CardMain from './CardMain';
import Box from '@mui/material/Box';

const MainScreen = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Bg />
      <Header />
      <CardMain />
    </Box>
  );
};

export default MainScreen;
