import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import girl from "../../src/images/girl.jpg";
// import table from "../../src/images/girl.jpg";
// import car from "../../src/images/girl.jpg";
// import grass from "../../src/images/girl.jpg";
// import guitar from "../../src/images/girl.jpg";
// import tree from "../../src/images/girl.jpg";
const FourthCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Card style={{ height: '70vh', width: '100%', backgroundColor: 'black',padding:0 }}>
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
        <Typography sx={{ mt: 3 }} variant={isSmallScreen ? "h4" : "h3"} color="white">
          We love what we do, check out some of our latest works
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FourthCard;
