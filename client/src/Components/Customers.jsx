import React from 'react';
import Paper from "@mui/material/Paper";
import { Container, Typography, Grid } from "@mui/material";
import myImage1 from "../images/logo.png";
import myImage2 from "../images/logo2.png";

const Customers = () => {
  return (
    <>
    <Container>
        <Paper elevation={3} sx={{ marginTop: 3 }}>
          <Typography variant='h6' sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
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
                alt="customers"
              />
              <img
                src={myImage2}
                data-aos="fade-up"
                style={{ height: 50, width: 80, borderRadius: 10, margin: 30 }}
                alt="customers"
              />
            </Grid>
          </Container>
        </Paper>
    </Container>
    </>
  )
}

export default Customers