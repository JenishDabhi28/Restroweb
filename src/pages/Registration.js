import React, { useState } from "react";
import { Box, Typography, TextField, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (name.trim() === "") {
      alert("Name is required");
      return;
    }

    if (contactNumber.trim() === "") {
      alert("Contact number is required");
      return;
    }

    if (password.trim() === "") {
      alert("Password is required");
      return;
    }

    const url = "http://localhost/react/register.php";
    const formData = new FormData();
    formData.append('name', name);
    formData.append('contactNumber', contactNumber);
    formData.append('password', password);

    try {
      const response = await axios.post(url, formData);
      alert(response.data);

  
      if (response.data === "success") {
        window.location.href = "/login";
      } else {
       
        
      }
    } catch (error) {
      alert(error.response ? error.response.data : "An error occurred");
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          animation: "fadeIn 1s ease-in",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Registration
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "80%",
            "& .MuiTextField-root": {
              width: "100%",
              marginBottom: "10px",
            },
            "& .MuiButton-root": {
              width: "100%",
              marginTop: "15px",
              backgroundColor: "#4caf50",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#45a049",
              },
            },
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Contact Number"
            variant="outlined"
            margin="normal"
            name="contactNumber"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <MuiLink
            component={RouterLink}
            onClick={handleRegister}
            sx={{
              textDecoration: "none",
              width: "100%",
              marginTop: "15px",
              backgroundColor: "#4caf50",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#45a049",
              },
            }}
          >
            Register
          </MuiLink>
        </Box>
        <Typography variant="body2" sx={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <MuiLink component={RouterLink} to="/login">
            Login here
          </MuiLink>
        </Typography>
      </Box>
    </Layout>
  );
};

export default Registration;
