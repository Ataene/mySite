import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import mapImage from "../images/worldMap.png";
import mapImage1 from "../images/usa.jpg";
import mapImage2 from "../images/asia.jpg";
import mapImage3 from "../images/africa.jpg";
import mapImage4 from "../images/south.jpg";
import mapImage5 from "../images/aus.jpg";
import { Typography } from "@mui/material";

const Map = () => {
  const mapStyle = {
    backgroundImage: `url(${mapImage})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "800px",
    width: "80rem",
  };
  return (
    <>
    <Typography variant="h5" sx={{display: "flex", justifyContent: "center", marginTop: 5, marginBottom: 1}}>Our Global Customer</Typography>
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center"}}  >
      <Grid container spacing={2} minHeight={160} style={mapStyle}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          {/* <Avatar src={mapImage1} /> */}
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Avatar src={mapImage1} />
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar src={mapImage4} sx={{marginRight: "45px", marginTop:"300px"}} />
          {/* <Typography sx={{marginRight: "60px", marginTop:"300px", color: "greenyellow"}}>Gloria</Typography> */}
        </Grid>


        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar src={mapImage3} sx={{marginRight: "45px", marginTop:"300px"}}  />
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar src={mapImage2} sx={{marginRight: "130px"}} />
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar src={mapImage5} sx={{marginRight: "300px", marginTop:"500px"}} />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Map;
