import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  AppBar,
  Toolbar,
  CircularProgress,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Import image correctly
import profileImg from "../profileImg/mitesh_img.jpg"; // Adjust path if needed

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const Start = ({ toggleMode, mode }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "blue" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <MotionTypography
            variant="h6"
            sx={{ fontWeight: "bold" }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Mitesh's Portfolio
          </MotionTypography>

          <Button
            onClick={toggleMode}
            startIcon={mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            sx={{ color: "white" }}
          >
            {mode === "dark" ? "Light" : "Dark"} Mode
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          paddingY: 8,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          {/* ✅ Use imported image */}
          <Avatar
            alt="Mitesh"
            src={profileImg}
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              marginBottom: 2,
              border: "3px solid blue",
            }}
          />

          <MotionTypography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "blue",
              fontFamily: "monospace",
            }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm Mitesh
          </MotionTypography>

          <MotionTypography
            variant="h5"
            component="p"
            gutterBottom
            sx={{ marginBottom: 4, fontFamily: "monospace" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            A Passionate React.js Developer
          </MotionTypography>

          <MotionBox
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleRedirect}
              sx={{ fontWeight: "bold", px: 4 }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                  Loading...
                </>
              ) : (
                "See My Portfolio"
              )}
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
};

export default Start;
