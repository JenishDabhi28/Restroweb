// ForgotPassword.js
import React, { useState } from "react";
import { Box, Button, Typography, TextField, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {

    console.log("Email for password reset:", email);
    
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
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
          Forgot Password
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
            "& .MuiTextField-root": {
              width: "100%",
              marginBottom: "15px",
            },
            "& .MuiButton-root": {
              width: "100%",
              marginTop: "20px",
            },
          }}
        >
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </Box>
        <Link component={RouterLink} to="/login" sx={{ marginTop: "10px" }}>
          Back to Login
        </Link>
      </Box>
    </Layout>
  );
};

export default ForgotPassword;
