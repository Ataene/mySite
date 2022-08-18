import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { projectList } from "./Data/data";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
// import AOS from 'aos';
import "aos/dist/aos.css";

const Projects = () => {
  return (
    <>
      <Container id='Projects'>
        <Typography
          sx={{ display: "flex", justifyContent: "center", marginTop: "15px", color: "green" }}
          data-aos="fade-left"
          variant="h3"
        >
          Projects
        </Typography>
        <Grid container>
          {projectList.map((item) => (
            <Grid
              item
              xs={12}
              md={2}
              lg={4}
              sx={{ justifyContent: "center", display: "flex", marginTop: 5 }}
            >
              <Card
                sx={{ maxWidth: 345, margin: 1, marginTop: "2px" }}
                key={item.id}
                data-aos="zoom-in"
              >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <PreviewIcon
                    onClick={() => window.open(`${item.url}`, `_blank`)}
                    sx={{ fontSize: 30, color: "green", cursor: "pointer" }}
                  />

                  <GitHubIcon
                    onClick={() => window.open(`${item.github}`, `_blank`)}
                    sx={{
                      fontSize: 28,
                      color: "#0072b1",
                      cursor: "pointer",
                      marginRight: 2,
                    }}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
