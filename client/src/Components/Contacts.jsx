import React, { useState, useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  Button,
  TextField
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { FirebaseContext } from "./auth/FireabaseProvider";

const Contacts = () => {
  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    timeStamp: serverTimestamp(),
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    // e.preventDefault();
    try {
      const messageCollection = collection(db, "message");
      await addDoc(messageCollection, {
        ...formData,
        timeStamp: serverTimestamp(),
      });
     setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
     })
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container sx={{ flexGrow: 1 }} id="Contacts">
        <Typography
          variant="h3"
          sx={{ display: "flex", justifyContent: "center", color: "green" }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} lg={4}>
            <Item>
              <List component="nav" aria-labelledby="nested-list-subheader">
                <ListItemButton>
                  <ListItemIcon>
                    <MapsHomeWorkIcon
                      sx={{ color: "#B8F1B0", paddingRight: 1 }}
                    />{" "}
                    Calgary, Alberta, Canada.
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <MailOutlineIcon
                      sx={{ color: "#B8F1B0", paddingRight: 1 }}
                    />{" "}
                    alafonye@gmail.com
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ContactPhoneIcon
                      sx={{ color: "#B8F1B0", paddingRight: 1 }}
                    />{" "}
                    +1 (587) 800-5896
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Item>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            {/* <Item> */}
            <Box
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <TextField
                  id="First Name"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  sx={{width: "50%"}}
                />
                <TextField
                  id="Last Name"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  sx={{width: "50%"}}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <TextField id="Phone"
                 label="Phone" 
                 variant="outlined"
                 type="text"
                 sx={{width: "50%"}}
                 name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                 />
                <TextField id="Email" label="Email" variant="outlined"
                type="text"
                 sx={{width: "50%"}}
                 name="email"
                value={formData.email}
                onChange={handleChange}
                 />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField 
                id="Message" 
                label="Message..." 
                type="text"
                multiline 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                 />
                <Button onClick={handleSubmit}>Submit</Button>
              </Box>
            {/* </Item> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contacts;
