import React from "react";
import Paper from "@mui/material/Paper";
import { Container, Typography, Box, Grid } from "@mui/material";
import myImage from "../images/Alaf.jpg";
import myImage1 from "../images/logo.png";
import myImage2 from "../images/logo2.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item sx={{ display: { xs: '', sm: 'block', md: 'none' }}}>
              <img
                src={myImage}
                style={{ borderRadius: 20 }}
                placeholder="Emmanuel"
                data-aos="fade-right"
              />
              <Box>
                <Typography
                  variant="h3"
                  sx={{ marginBottom: 0.2 }}
                  data-aos="fade-left"
                >
                  Hello, I'm <span style={{ color: "red" }}>Emmanuel</span> Ala
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ marginBottom: 0.5 }}
                  data-aos="fade-left"
                >
                  A{" "}
                  <span style={{ color: "green" }} data-aos="fade-left">
                    Full Stack Software
                  </span>
                  /Machine Learning Engineer
                </Typography>
                <Typography data-aos="fade-left">
                  BSc In Petroleum Systems Engineering
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}
                >
                  <LinkedInIcon
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/alafonye-emmanuel/",
                        "_blank"
                      )
                    }
                    sx={{
                      color: "#0072b1",
                      fontSize: 40,
                      cursor: "pointer",
                      marginRight: 2,
                    }}
                    data-aos="fade-left"
                  />
                  <GitHubIcon
                    onClick={() =>
                      window.open("https://github.com/Ataene", "_blank")
                    }
                    sx={{ color: "#0072b1", fontSize: 35, cursor: "pointer" }}
                    data-aos="fade-left"
                  />
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Container>

      {/* <Container sx={{ marginTop: 10 }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
        <Grid item xs={12} md={2}>
          <Item>
            <img
              src={myImage}
              style={{ borderRadius: 20 }}
              placeholder="Emmanuel"
              data-aos="fade-right"
            />
          </Item>
        </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10%",
              marginLeft: 20,
            }}
          >
            <Typography
              variant="h3"
              sx={{ marginBottom: 0.2 }}
              data-aos="fade-left"
            >
              Hello, I'm <span style={{ color: "red" }}>Emmanuel</span> Ala
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginBottom: 0.5 }}
              data-aos="fade-left"
            >
              A{" "}
              <span style={{ color: "green" }} data-aos="fade-left">
                Full Stack Software
              </span>
              /Machine Learning Engineer
            </Typography>
            <Typography data-aos="fade-left">
              BSc In Petroleum Systems Engineering
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
              <LinkedInIcon
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/alafonye-emmanuel/",
                    "_blank"
                  )
                }
                sx={{
                  color: "#0072b1",
                  fontSize: 40,
                  cursor: "pointer",
                  marginRight: 2,
                }}
                data-aos="fade-left"
              />
              <GitHubIcon
                onClick={() =>
                  window.open("https://github.com/Ataene", "_blank")
                }
                sx={{ color: "#0072b1", fontSize: 35, cursor: "pointer" }}
                data-aos="fade-left"
              />
            </Box>
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
};

export default About;
