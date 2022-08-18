import React, {useState, useContext } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const messageCollection = collection(db, "message");
      await addDoc(messageCollection, {
        firstName,
        lastName,
        phone, 
        email,
        message,
        timeStamp: serverTimestamp(),
         });
         setFirstName("");
         setLastName("");
         setPhone("");
         setEmail("");
         setMessage("");
    } catch (error) {
      console.log(error.message)
    }
    }

  return (
    <>
      <Container sx={{ flexGrow: 1 }} id='Contacts'>
        <Typography variant="h3" sx={{display: "flex", justifyContent: "center", color: "green"}} >Contact Us</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} lg={4}>
            <Item>
            <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton>
              <ListItemIcon >
                <MapsHomeWorkIcon sx={{ color: "#B8F1B0", paddingRight: 1 }} /> Calgary, Alberta, Canada.
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineIcon sx={{ color: "#B8F1B0", paddingRight: 1  }} /> greatspiration@yahoo.com
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <ContactPhoneIcon sx={{ color: "#B8F1B0", paddingRight: 1  }}/> +1 (587) 800-5896
              </ListItemIcon>
            </ListItemButton>
          </List>
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
                  // placeholder="First Name here"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  sx={{width: "50%"}}
                />
                <TextField
                  id="Last Name"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  sx={{width: "50%"}}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <TextField id="Phone"
                 label="Phone" 
                 variant="outlined"
                 type="text"
                 sx={{width: "50%"}}
                value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                 />
                <TextField id="Email" label="Email" variant="outlined"
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                 sx={{width: "50%"}}
                 />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField 
                id="Message" 
                label="Message..." 
                type="text"
                multiline 
                rows={4}
                value={message}
                  onChange={(e) => setMessage(e.target.value)}
                 />
                <Button onClick={handleSubmit}>Submit</Button>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contacts;
