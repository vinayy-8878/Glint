import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CarouselComponent from '../Components/CarouselComponent';

const SliderMainScreen = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  
    return (
        <Card style={{ height: '70%', width: '100%', backgroundColor: '#eeeeee',padding:0 }}>
            <CardContent
                style={{
                    width: isSmallScreen ? "100%" : "70%",
                    margin: "auto",
                    textAlign: "center",
                }}
            >
                <Typography sx={{ mt: 3 }} variant="h6" color="#39b54a">
                    Recent Works
                </Typography>
                <Typography sx={{ mt: 3 }} variant={isSmallScreen ? "h4" : "h3"} color="black">
                    Glint has been honored to partner up with these clients
                </Typography>
                <CarouselComponent />
                <Divider sx={{ mt: 3 }} />
            </CardContent>
        </Card>
    );
}

export default SliderMainScreen;
