import React, { useState } from "react";
import { Box, Button, Typography, TextField, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useAuth } from './AuthContext';

const Login = () => {
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login, logout } = useAuth();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    if (contactNumber.trim() === "") {
      alert("Contact required");
      return;
    }
    if (password.trim() === "") {
      alert("Password required");
      return;
    }
    const url = "http://localhost/react/login.php";
    let fData = new FormData();
    fData.append('contactNumber', contactNumber);
    fData.append('password', password);

    try {
      const response = await axios.post(url, fData);
      alert(response.data);

      if (response.data === "success") {
        login();
        setLoginSuccess(true);
        {loginSuccess && <Link component={RouterLink} to="/" sx={{ marginTop: "10px" }}>
            </Link>}
      } else {
        setLoginSuccess(false);
      }
    } catch (error) {
      alert(error);
    };
  };

  const handleLogout = () => {
    logout();
    
    localStorage.removeItem('userToken'); // Assuming you stored a token in local storage
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
        {isLoggedIn ? (
   
          <>
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
            {loginSuccess && <Link component={RouterLink} to="/" sx={{ marginTop: "10px" }}>
              Go to Home
            </Link>}
          </>
        ) : (
          <>
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Login
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

              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
              >
                <span
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  Login
                </span>
              </Button>
            </Box>
            <Link
              component={RouterLink}
              to="/registration"
              sx={{ marginTop: "10px" }}
            >
              Register Now
            </Link>
            <Link
              component={RouterLink}
              to="/forgotpassword"
              sx={{ marginTop: "10px" }}
            >
              Forgot Password?
            </Link>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Login;
