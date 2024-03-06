import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import girl from "../../src/images/girl.jpg";
import table from "../../src/images/table.jpg";
import car from "../../src/images/car.jpg";
import grass from "../../src/images/grass.jpg";
import guitar from "../../src/images/guitar.jpg";
import tree from "../../src/images/tree.jpg";

const images = [girl, table, car, grass, guitar, tree];

const FifthCard = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const issm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card style={{ width: isSmallScreen ? "85%" : "70%", margin: "auto", marginTop: "-90px" ,backgroundColor:'white'}} elevation={0} variant="outlined">
      <CardContent style={{ textAlign: "center", padding: 0 }}>
        <Grid container justifyContent="center" sx={{ padding: 0 }}>
          {images.map((image, index) => (
            <Grid key={index} item xs={issm ? 12 : isMediumScreen ? 6 : 6}>
              <img src={image} alt={`Image ${index}`} style={{ width: "100%", height: "100%" }} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FifthCard;
