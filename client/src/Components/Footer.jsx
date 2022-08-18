import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <>
      <Grid id='Footer'
        sx={{
          backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
          marginTop: 5,
          height: '100px',
          marginBottom: 0,
        }}
      >
        <Container sx={{display: "flex", justifyContent:"center", flexDirection: "column", alignItems: 'center'}}>
        <Typography variant="h5">Let's Connect</Typography>
        <Box >
            <TwitterIcon
            onClick={() => window.open(`https://twitter.com/alafonye`, `_blank`)}
             sx={{fontSize: 60, color: "#1D9BF0", cursor: "pointer"}} 
             />
            <InstagramIcon sx={{fontSize: 60, color: "#405DE6", cursor: "pointer"}} 
              onClick={() => window.open(`https://www.instagram.com/alaf_e/`, `_blank`)}
            />
            <FacebookIcon sx={{fontSize: 60, color: "#4267B2", cursor: "pointer"}} 
              onClick={() => window.open(`https://www.facebook.com/Ataene89`, `_blank`)}
            />
        </Box>
        </Container>
      </Grid>
    </>
  );
}
