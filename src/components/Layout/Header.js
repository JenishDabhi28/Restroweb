import React, { useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../../images/ll.png";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/HeaderStyles.css";
import { useAuth } from "../../pages/AuthContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Get isLoggedIn state from context

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 2, my: 4 }}>
        <img src={Logo} alt="logo" height={"70"} width="0" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        {isLoggedIn ? (
          <li>
            <button variant="contained" color="primary" onClick={handleLogout}><Button className="success" variant="contained" color="primary">Logout</Button></button>
          </li>
        ) : (
          <li variant="contained">
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        )}
        {!isLoggedIn && ( // Conditionally render the Registration link only if user is not logged in
          <li>
            <NavLink to={"/registration"}>Registration</NavLink>
          </li>
        )}
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 3,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="logo" height={"100"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                {isLoggedIn ? (
                  <li>
                    <Button className="success" variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
                  </li>
                ) : (
                  <li variant="contained">
                    <NavLink to={"/login"}><Button className="success" variant="contained" color="primary">Login</Button></NavLink>
                  </li>
                )}
                {!isLoggedIn && ( // Conditionally render the Registration link only if user is not logged in
                  <li>
                    <NavLink to={"/registration"}><Button className="success" variant="contained" color="primary">Signup</Button></NavLink>
                  </li>
                )}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "300px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
