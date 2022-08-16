import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const Contacts = () => {
  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Container sx={{ flexGrow: 1 }}>
        <Typography variant="h3" sx={{display: "flex", justifyContent: "center", color: "green"}} >Contact Us</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} lg={4}>
            <Item>
              <Typography>
                <MapsHomeWorkIcon /> Calgary, Alberta, Canada
              </Typography>
              <Typography>
                <MailOutlineIcon />{" "}
              </Typography>
              <Typography>
                <ContactPhoneIcon />{" "}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Item>
              <Box
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <TextField
                  id="First Name"
                  label="First Name"
                  variant="outlined"
                  sx={{width: "50%"}}
                />
                <TextField
                  id="Last Name"
                  label="Last Name"
                  variant="outlined"
                  sx={{width: "50%"}}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <TextField id="Phone" label="Phone" variant="outlined" sx={{width: "50%"}}  />
                <TextField id="Email" label="Email" variant="outlined" sx={{width: "50%"}}/>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField id="Message" label="Message..." multiline rows={4} />
                <Button>Submit</Button>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contacts;
