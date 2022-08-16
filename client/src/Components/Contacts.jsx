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
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Contacts = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Container
        sx={{
          width: "100%",
          maringTop: 30,
          // backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        }}
      >
        <Typography
          variant="h3"
          sx={{ display: "flex", justifyContent: "center", color: "green" }}

        >
          Contacts
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Item data-aos="fade-down">
              <Typography><MapsHomeWorkIcon/> Calgary, Alberta, Canada</Typography>
              <Typography><MailOutlineIcon/>  ke.alafonye@yahoo.com</Typography>
              <Typography><ContactPhoneIcon/> +13062093394</Typography>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item data-aos="fade-down">
              <Box sx={{ display: "flex", flexDirection: "row", width:"100%" }}>
                <TextField
                  id="First Name"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  id="Last Name"
                  label="Last Name"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <TextField id="Phone" label="Phone" variant="outlined" />
                <TextField id="Email" label="Email" variant="outlined" />
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
