import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";

// ✅ Import same background images as Home
import darkBg from "../profileImg/react.jpg";       // dark mode image
import lightBg from "../profileImg/reactlight.png"; // light mode image

// Motion-enhanced MUI components
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
        >
          Mitesh's Portfolio
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {["home", "about", "contact"].map((route) => (
            <Button
              key={route}
              component={Link}
              to={`/${route}`}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                  transition: "all 0.3s ease",
                  color: "#ffd700",
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

const Contact = ({ mode }) => {
  return (
    <>
      <Navbar />
      <MotionBox
        sx={{
          minHeight: "calc(100vh - 64px)",
          py: 8,
          position: "relative",
          backgroundImage: `url(${mode === "dark" ? darkBg : lightBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Overlay for readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: mode === "dark"
              ? "rgba(0,0,0,0.6)"
              : "rgba(255,255,255,0.6)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <MotionTypography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              color: mode === "dark" ? "#00bfff" : "#1e90ff",
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
              backgroundColor: mode === "dark" ? "rgba(30,30,30,0.9)" : "white",
              p: 4,
              borderRadius: 3,
              boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{fontFamily: "Poppins, sans-serif"}} gutterBottom>
              Contact Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box display="flex" alignItems="center" mb={2}>
              <EmailIcon sx={{ mr: 1, color: mode === "dark" ? "#00bfff" : "blue" }} />
              <Typography
                variant="body1"
                component="a"
                href="mailto:thakormitesh2702@gmail.com"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: mode === "dark" ? "#fff" : "black",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                thakormitesh2702@gmail.com
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon sx={{ mr: 1, color: mode === "dark" ? "#00bfff" : "blue" }} />
              <Typography
                variant="body1"
                component="a"
                href="tel:+919313443520"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: mode === "dark" ? "#fff" : "black",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                +91 93134 43520
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <LocationOnIcon sx={{ mr: 1, color: mode === "dark" ? "#00bfff" : "blue" }} />
              <Typography variant="body1" sx={{ color: mode === "dark" ? "#fff" : "black", fontFamily: "Poppins, sans-serif" }}>
                Navsari, Gujarat, India
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<DescriptionIcon />}
              href="https://drive.google.com/file/d/1eE6p3yCULLlMyRYL-03pXL7Y3wYimIw0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: "Poppins, sans-serif",
                mt: 2,
                borderRadius: "20px",
                fontWeight: "bold",
                textTransform: "none",
                background: "linear-gradient(90deg,#1e90ff,#00bfff)",
                "&:hover": {
                  background: "linear-gradient(90deg,#00bfff,#1e90ff)",
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
