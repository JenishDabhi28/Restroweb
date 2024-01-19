import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [userInput, setUserInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) {
      setErrorMessage("Write something before submitting.");
      setSuccessMessage("");
    } else {
    
      const url = "http://localhost/react/feedbk.php";
      const fData = new FormData();
      fData.append('userInput', userInput);
      
      try {
        const response = await axios.post(url, fData);
        alert(response.data);
      
        console.log(response.data); 
        setUserInput("");
        setErrorMessage("");
        setSuccessMessage("Your feedback submitted successfully");
      } catch (error) {
        alert(error.message); 

        console.error('Error:', error);
        setErrorMessage("Error submitting feedback. Please try again later.");
        setSuccessMessage("");
      }
    }
  };
  return (
    <Layout>
    <Box
      sx={{
        my: 3,
        mx: 4,
        marginTop: 7, 
        "& h4": { fontWeight: "bold", mb: 2 },
      }}
    >
      <Typography variant="h4">Contact My Restaurant</Typography>
      <div>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            opacity: 0.8,
            textAlign: "justify",
            fontFamily: "Merienda",
          }}
        >
          Welcome to our contact page! We value your feedback and inquiries. Whether you have questions about our services, want to collaborate, or simply wish to share your thoughts, we encourage you to reach out. Our dedicated team is here to assist you. You can contact us through the provided form, email, or phone number. We appreciate your interest in connecting with us and look forward to hearing from you soon. Your input is vital to our continuous improvement and ensuring that we provide the best experience possible. Thank you for choosing to get in touch with us—we're here to help!
        </Typography>
      </div>
    </Box>
    <Box
      sx={{
        m: 1,
        width: "100%",
        ml: 1,
        textAlign: "center",
        mx: 2,
      }}
    >
        <div style={{ marginLeft: "opx", marginTop: "10px" }}>
          <TextField
            label="Write here"
            variant="outlined"
            multiline
            fullWidth
            rows={4}
            value={userInput}
            onChange={handleInputChange}
            sx={{
              marginBottom: "10px",
              marginX: "auto", // Center the box horizontally
              maxWidth: "500px", // Set a maximum width for the box
            }}
          />
         
          {errorMessage && (
            <Typography variant="body2" color="error">
              {errorMessage}
            </Typography>
          )}
          {/* Display success message if there is one */}
          {successMessage && (
            <Typography variant="body2" color="success">
              {successMessage}
            </Typography>
          )}
          <br />
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <TableContainer component={Paper} sx={{ maxWidth: "600px", margin: "50px auto" }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              <TableCell>
                <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                <a
                  href="mailto:jenishdabhi@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jenishdabhi@gmail.com
                </a>
              </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 72010985..
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
