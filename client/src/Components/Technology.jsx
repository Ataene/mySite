import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import image1 from "../images/reactNative.png";
import image2 from "../images/mongoDb.png";
import image3 from "../images/aws.png";
import image4 from "../images/ml.png";
import image5 from "../images/reactIcons.png";
import image6 from "../images/node.png";
import image7 from "../images/expressJs.png";
import image8 from "../images/firebase.png";
import "aos/dist/aos.css";

const Technology = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container sx={{ flexGrow: 1, marginTop: 5, backgroundColor: "green" }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4} >
          <Item data-aos="fade-right">
            <Typography variant="h4" color="green" marginBotton="20px" sx={{marginTop: 3}}>Technology Stack</Typography>
            <Container>
            <Typography sx={{marginLeft: 0}}>
            <ul style={{textAlign: "left"}}>
              <li>Reactjs frontend application</li>
              <li >Nodejs backend development</li>
              <li>AWS in building machine learning</li>
              <li>React Native for mobile application</li>
              <li>Express for server side</li>
              <li>Firebase for serverless development</li>
              <li>Mongdb Datbase from NoSQl data storage</li>
            </ul>
            </Typography>
            </Container>
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item data-aos="fade-down">
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 1 }}>
                <img src={image1} height="80px" />
              </Box>
              <Box
                id="category-a"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                React
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item data-aos="fade-down">
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 1 }}>
                <img src={image2} height="80px" />
              </Box>
              <Box
                id="category-b"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                MongoDB
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item data-aos="fade-down">
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <img src={image6} height="80px" />
              </Box>
              <Box
                id="category-c"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Node
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item data-aos="fade-down">
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <img src={image3} height="80px" />
              </Box>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                AWS
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item data-aos="fade-up">
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <img src={image4} height="80px" />
              </Box>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Machine Learning
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item data-aos="fade-up">
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <img src={image1} height="80px" />
              </Box>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                React Native
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item data-aos="fade-up">
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 1 }}>
                <img src={image7} height="80px" />
              </Box>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Expressjs
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item data-aos="fade-up">
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <img src={image8} height="80px" />
              </Box>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Firebase
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default Technology;
