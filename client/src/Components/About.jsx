import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import myImage from "../images/Alaf.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Container sx={{ flexGrow: 1, marginTop: 8 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6}>
            <Item>
            <img
                src={myImage}
                style={{ borderRadius: 20 }}
                placeholder="Emmanuel"
                data-aos="fade-right"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={4} lg={4} sx={{marginTop: 5, marginLeft: 0}}>
            <Item>
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
                  sx={{ display: "flex", flexDirection: "row", marginTop: 2, justifyContent: "center" }}
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
    </>
  );
};

export default About;
