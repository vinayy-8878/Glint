import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slider from 'react-slick';
import AppleIcon from '@mui/icons-material/Apple';
import AnimationIcon from '@mui/icons-material/Animation';
import ContrastIcon from '@mui/icons-material/Contrast';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  appendDots: dots => (
    <ul style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', padding: 0 }}>
      {dots.slice(0, 4)} {/* Display only 4 dots */}
    </ul>
  ),
};

const CarouselComponent = () => {
    const theme = useTheme();
    const lgScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const mdScreen = useMediaQuery(theme.breakpoints.up('md'));
    const smScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const xsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const iconSize = lgScreen?'100px':mdScreen ? '55px' : smScreen ? '35px' : xsScreen ? '0px' : '0px';
    const icons = [
        <AppleIcon style={{ fontSize: iconSize }}/>,
        <AnimationIcon style={{ fontSize: iconSize }}/>,
        <ContrastIcon style={{ fontSize: iconSize }}/>,
        <DragIndicatorIcon style={{ fontSize: iconSize }}/>,
        <LocalFireDepartmentIcon style={{ fontSize: iconSize }}/>,
        <FilterDramaIcon style={{ fontSize: iconSize }}/>,
        <LensBlurIcon style={{ fontSize: iconSize }}/>,
    ];
    const numIcons = lgScreen?6:mdScreen ? 5 : smScreen ? 4 : xsScreen ? 0 : 0;

    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    return (
      <Card style={{ width: '70%', margin: '0 auto', display: xsScreen ? 'none' : 'block' }}>
        <CardContent>
          <div style={{ textAlign: 'center' }}>
            <Slider {...settings} slidesToShow={numIcons}>
              {icons.map((icon, index) => (
                <div key={index} style={{ display: 'inline-block', textAlign: 'center' }}>
                  <span
                    style={{
                      fontSize: iconSize,
                      color: index === hoveredIndex ? 'black' : 'grey',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                      width: '100%',  // Ensure icons take full width
                      display: 'inline-block',
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {icon}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </CardContent>
      </Card>
    );
  };
  
export default CarouselComponent;
