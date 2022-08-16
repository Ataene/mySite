import React from 'react';
import Paper from "@mui/material/Paper";
import { Container, Typography, Box, Grid } from "@mui/material";
import myImage1 from "../images/logo.png";
import myImage2 from "../images/logo2.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";


const Customers = () => {
  return (
    <>
    <Container>
        <Paper elevation={3} sx={{ marginTop: 3 }}>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Trusted by over 10+ happy customers, including
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid>
              <img
                src={myImage1}
                data-aos="fade-up"
                style={{ height: 50, width: 80, borderRadius: 10, margin: 30 }}
              />
              <img
                src={myImage2}
                data-aos="fade-up"
                style={{ height: 50, width: 80, borderRadius: 10, margin: 30 }}
              />
              <img
                src={myImage1}
                data-aos="fade-up"
                style={{ height: 50, width: 80, borderRadius: 10, margin: 30 }}
              />
              <img
                src={myImage1}
                data-aos="fade-up"
                style={{ height: 50, width: 80, borderRadius: 10, margin: 30 }}
              />
            </Grid>
          </Container>
        </Paper>
    </Container>
    </>
  )
}

export default Customers