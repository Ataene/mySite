import React from "react";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import 'aos/dist/aos.css';

const Flow = () => {
  return (
    <>
      <Container>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            backgroundImage: " linear-gradient(60deg, #abecd6 0%, #fbed96 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3" sx={{display: "flex", justifyContent: "center", marginTop: 5}} data-aos="fade-right">Are you looking to hire?</Typography>
          <Typography variant="h5" sx={{display: "flex", justifyContent: "center"}} data-aos="fade-left">Learn more about our service</Typography>
          <Box sx={{display: "flex", justifyContent: "center", marginBottom: 5}}>
          <Button size="medium" variant="outlined" data-aos="fade-up">Learn More</Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Flow;
