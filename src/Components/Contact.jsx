import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";

// Motion-enhanced MUI components
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

// Updated Navbar component
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Mitesh's Portfolio
        </Typography>

        {/* Always show links on all screen sizes */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {["home", "about", "contact"].map((route) => (
            <Button
              key={route}
              component={Link}
              to={`/${route}`}
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                  transition: "all 0.3s ease",
                  color: "white",
                },
              }}
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Contact Page Component
const Contact = ({ mode }) => {
  return (
    <>
      <Navbar />
      <MotionBox
        sx={{
          minHeight: "calc(100vh - 64px)",
          backgroundColor: mode === "dark" ? "#121212" : "#f9f9f9", // Dark mode background
          color: mode === "dark" ? "#fff" : "#000", // Text color for light/dark mode
          py: 8,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="sm">
          <MotionTypography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: mode === "dark" ? "blue" : "blue", // Color change for dark mode
              mb: 4,
            }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </MotionTypography>

          <Box
            sx={{
              backgroundColor: mode === "dark" ? "#333" : "#fff", 
              p: 4,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box display="flex" alignItems="center" mb={2}>
              <EmailIcon sx={{ mr: 1, color: mode === "dark" ? "#fff" : "blue" }} />
              <Typography
                variant="body1"
                component="a"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=thakormitesh2702@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: mode === "dark" ? "#fff" : "black",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                thakormitesh2702@gmail.com
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon sx={{ mr: 1, color: mode === "dark" ? "#fff" : "blue" }} />
              <Typography
                variant="body1"
                component="a"
                href="tel:+919313443520"
                sx={{
                  color: mode === "dark" ? "#fff" : "black",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                +91 93134 43520
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <LocationOnIcon sx={{ mr: 1, color: mode === "dark" ? "#fff" : "blue" }} />
              <Typography variant="body1" sx={{ color: mode === "dark" ? "#fff" : "black" }}>
                Navsari, Gujarat, India
              </Typography>
            </Box>

            <Button
              variant="outlined"
              startIcon={<DescriptionIcon />}
              href="https://drive.google.com/file/d/1eE6p3yCULLlMyRYL-03pXL7Y3wYimIw0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                borderColor: "blue",
                color: "blue",
                "&:hover": {
                  backgroundColor: "blue",
                  color: "white",
                },
              }}
            >
              Explore My Resume
            </Button>
          </Box>
        </Container>
      </MotionBox>
    </>
  );
};

export default Contact;
