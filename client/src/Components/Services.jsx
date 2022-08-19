import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import image1 from "../images/dev.png";
import image2 from "../images/machine.png";
import image3 from "../images/webdev.png";
import image4 from "../images/mobile.png";

const Services = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container
      sx={{
        width: "100%",
        maringTop: 30,
        marginBottom: 5,
        // backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
      }}
    >
      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", color: 'green' }}
      >
        Services
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item data-aos="fade-down">
            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 1 }}>
              <img src={image1} height="80px" alt="services" />
            </Box>
            <Box
              id="category-a"
              sx={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              <Typography variant="h5">Web Development</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item data-aos="fade-down">
            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 1 }}>
              <img src={image2} height="80px" alt="services" />
            </Box>
            <Box
              id="category-a"
              sx={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              <Typography variant="h5">Mobile App Development</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item data-aos="fade-down">
            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 1 }}>
              <img src={image3} height="80px" alt="services" />
            </Box>
            <Box
              id="category-a"
              sx={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              <Typography variant="h5">UI/UX Design</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item data-aos="fade-down">
            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 1 }}>
              <img src={image4} height="80px" alt="services" />
            </Box>
            <Box
              id="category-a"
              sx={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              <Typography variant="h5">Machine Learning</Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
