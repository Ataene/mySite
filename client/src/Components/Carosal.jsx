import React from "react";
import Carousel from "react-material-ui-carousel";
import styled from "@mui/system/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import mapImage1 from "../images/Chris.jpg";
import mapImage2 from "../images/John.jpg";
import mapImage3 from "../images/kate.jpg";
import mapImage4 from "../images/Paul.jpg";

const Carosal = () => {
  const Item = styled("Box")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));
  const items = [
    {
      name: "Mary",
      description: "Wonderful experience working with Emma",
      image: `${mapImage1}`,
    },
    {
      name: "John",
      description: "Awesome project, Emma is nice",
      image: `${mapImage2}`,
    },
    {
      name: "Kate",
      description: "I can't say the least, great time",
      image: `${mapImage3}`,
    },
    {
      name: "Chris",
      description: "Patience and collaborative",
      image: `${mapImage4}`,
    },
  ];
  return (
    <>
      <Container container spacing={1} >
        <Grid  item xs={12} md={12} lg={12} >
          <Item>
            <Carousel
              next={(next, active) =>
                (` ${active}${next}`)
              }
              prev={(prev, active) =>
                (`${active} ${prev}`)
              }
            >
              {items.map((item, i) => (
                <Card key={item.name} sx={{ maxWidth: 1200 }}>
                  <CardMedia
                    component="img"
                    height="600"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </Item>
        </Grid>
      </Container>
    </>
  );
};

export default Carosal;
